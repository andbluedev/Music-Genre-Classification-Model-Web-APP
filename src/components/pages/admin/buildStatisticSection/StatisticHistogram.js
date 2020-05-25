import React from 'react';
import { Bar } from 'react-chartjs-2';
import { failureState } from '../../../../data/api';

export const StatisticHistogram = ({
  closedFailuresSum,
  onGoingFailuresSum,
  unresolvedFailuresSum,
  uselessFailuresSum
}) => {
  const barState = {
    dataBar: {
      labels: [
        failureState.UN_RESOLVED,
        failureState.CLOSED,
        failureState.USELESS,
        failureState.ONGOING
      ],
      datasets: [
        {
          label: 'Nombre Total de pannes',
          data: [
            unresolvedFailuresSum,
            closedFailuresSum,
            uselessFailuresSum,
            onGoingFailuresSum
          ],
          backgroundColor: [
            'rgba(255, 134,159,0.4)',
            'rgba(98,  182, 239,0.4)',
            'rgba(255, 218, 128,0.4)',
            'rgba(113, 205, 205,0.4)'
          ],
          borderWidth: 2,
          borderColor: [
            'rgba(255, 134, 159, 1)',
            'rgba(98,  182, 239, 1)',
            'rgba(255, 218, 128, 1)',
            'rgba(113, 205, 205, 1)',
            'rgba(170, 128, 252, 1)',
            'rgba(255, 177, 101, 1)'
          ]
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  };

  return <Bar data={barState.dataBar} options={barState.barChartOptions} />;
};
