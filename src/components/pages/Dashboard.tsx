import React from 'react';
import Text from '../atoms/commonText';

// React Charts
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

const Dashboard = () => {
  const pieChart = {
    labels: ['Done', 'In Progress', 'Not Completed', 'Pending'],
    datasets: [
      {
        data: [
          // totalProgress?.Done,
          // totalProgress?.['In Progress'] || 0,
          // totalProgress?.['Not Completed'] || 0,
          // totalProgress?.Pending || 0,

          10, 20, 30, 40,
        ],
        hoverOffset: 4,
        backgroundColor: ['#0eec2f', '#f4e409', '#ff0000', '#ffa12b'],
      },
    ],
  };

  const position = 'left';
  // const position = true ? 'bottom' : 'left';

  const chartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: position,
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          color: '#003358',
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div>
      <Text containerTag="h1" className="text-lg font-medium text-blackColor mb-6">
        Dashabord
      </Text>

      <div className="flex justify-between h-60 gap-3">
        <div className="flex flex-wrap w-full gap-3 justify-between">
          <div className="w-[calc(50%-12px)] rounded-md p-5 shadow-lg border-2 border-lightGray">
            <Text
              containerTag="h6"
              className="md:w-full w-max text-xs text-primary font-semibold md:mb-5 mb-0"
            >
              Total Doctors :
            </Text>

            <Text
              containerTag="h6"
              className="text-base text-center text-grayColor font-semibold"
            >
              333 Doctors
            </Text>
          </div>
          <div className="w-[calc(50%-12px)] rounded-md p-5 shadow-lg border-2 border-lightGray">
            <Text
              containerTag="h6"
              className="md:w-full w-max text-xs text-primary font-semibold md:mb-5 mb-0"
            >
              Un Approved Doctors :
            </Text>

            <Text
              containerTag="h6"
              className="text-base text-center text-grayColor font-semibold"
            >
              333 Doctors
            </Text>
          </div>
          <div className="w-[calc(50%-12px)] rounded-md p-5 shadow-lg border-2 border-lightGray">
            <Text
              containerTag="h6"
              className="md:w-full w-max text-xs text-primary font-semibold md:mb-5 mb-0"
            >
              Total Patients :
            </Text>

            <Text
              containerTag="h6"
              className="text-base text-center text-grayColor font-semibold"
            >
              333 Patients
            </Text>
          </div>
          <div className="w-[calc(50%-12px)] rounded-md p-5 shadow-lg border-2 border-lightGray">
            <Text
              containerTag="h6"
              className="md:w-full w-max text-xs text-primary font-semibold md:mb-5 mb-0"
            >
              Total Appointments :
            </Text>

            <Text
              containerTag="h6"
              className="text-base text-center text-grayColor font-semibold"
            >
              333 Appointments
            </Text>
          </div>
        </div>

        <div className="relative w-[60%] shadow-lg border-2 border-lightGray rounded-md p-5">
          <Text
            containerTag="h6"
            className="absolute md:w-full w-max text-xs text-primary font-semibold md:mb-5 mb-0"
          >
            Progress Chart :
          </Text>

          <Doughnut data={pieChart} options={chartOptions as any} height={155} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
