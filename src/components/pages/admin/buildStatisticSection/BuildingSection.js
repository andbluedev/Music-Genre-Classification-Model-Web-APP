import { SubTitle } from '../../../common/text/Basics';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect, useState } from 'react';
import { StatisticHistogram } from './StatisticHistogram';
import { get } from '../../../../data/api';
import Spinner from 'react-bootstrap/Spinner';

export const BuildingSection = ({ entityEndpointName }) => {
  const [loading, setLoading] = useState(false);
  const [entityStatistics, setEntityStatistics] = useState([]);
  useEffect(() => {
    setLoading(true);
    get(`/statistics/${entityEndpointName}/summary`)
      .then((result) => {
        setEntityStatistics(result.payload);
      })
      .catch(() => alert('erreur en récupérant les statistiques des buildings.'))
      .finally(() => setLoading(false));
  }, [entityEndpointName]);
  return (
    <>
      {loading && (
        <Container>
          <Spinner animation='grow' />
        </Container>
      )}
      {entityStatistics.length > 0 ? (
        entityStatistics.map((entity) => {
          return (
            <>
              <SubTitle>{entity.dtoname}</SubTitle>
              <Container className='room-wrapper'>
                <Row>
                  <Col>
                    <StatisticHistogram
                      closedFailuresSum={entity.closedFailuresSum}
                      onGoingFailuresSum={entity.onGoingFailuresSum}
                      unresolvedFailuresSum={entity.unresolvedFailuresSum}
                      uselessFailuresSum={entity.uselessFailuresSum}
                    />
                  </Col>
                </Row>
              </Container>
            </>
          );
        })
      ) : (
        <p>Pas de statistiques disponibles.</p>
      )}
    </>
  );
};
