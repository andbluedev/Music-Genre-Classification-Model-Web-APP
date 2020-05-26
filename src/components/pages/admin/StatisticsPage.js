import React, { useContext } from 'react';
import { Title } from '../../common/text/Basics';
import { BuildingSection } from './buildStatisticSection/BuildingSection';
import { UserContext } from '../../../data/auth/UserContext';

export function StatisticsPage() {
  const { state } = useContext(UserContext);
  return state.role === 'ADMIN' ? (
    <div>
      <Title>Statistiques par Batiment</Title>
      <BuildingSection entityEndpointName='building' />
      <Title>Statistiques par Salles</Title>
      <BuildingSection entityEndpointName='room' />
    </div>
  ) : (
    <div> Vous n'avez pas le statut pour accéder à cette page </div>
  );
}
