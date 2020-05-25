import React from 'react';
import { Title } from '../../common/text/Basics';
import { BuildingSection } from './buildStatisticSection/BuildingSection';

export function StatisticsPage() {
  return (
    <div>
      <Title>Statistiques par Batiment</Title>
      <BuildingSection entityEndpointName='building' />
      <Title>Statistiques par Salles</Title>
      <BuildingSection entityEndpointName='room' />
    </div>
  );
}
