import React, { useContext } from 'react';
import { Title } from '../../common/text/Basics';
import { EntityStatisticsPanel } from './buildStatisticSection/EntityStatisticsPanel';
import { UserContext } from '../../../data/auth/UserContext';

export function StatisticsPage() {
  const { state } = useContext(UserContext);
  return state.role === 'ADMIN' ? (
    <div>
      <Title>Statistiques par Batiment</Title>
      <EntityStatisticsPanel entityEndpointName='building' />
      <Title>Statistiques par Salles</Title>
      <EntityStatisticsPanel entityEndpointName='room' />
    </div>
  ) : (
    <div> Vous n'avez pas le statut pour accéder à cette page </div>
  );
}
