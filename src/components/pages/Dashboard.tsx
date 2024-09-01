import React, { useEffect, useState } from 'react';
import Text from '../atoms/commonText';

// React Charts
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

// Redux
import { useDashboardAnalyticsQuery } from '../../redux/slice/userSlice';

// Components
import Loader from '../atoms/loader';

const Dashboard = () => {
  const { data: dashbaordData, isLoading, isFetching } = useDashboardAnalyticsQuery({});
  const [responsiveChart, setResponsiveChart] = useState<boolean>(false);

  console.log(dashbaordData, 'dashbaordData123');
  const data = dashbaordData?.data;

  const pieChart = {
    labels: ['Total Doctors', 'Total Patients', 'Un Verified Doctors', 'Pending Doctors'],
    datasets: [
      {
        data: [
          data?.totalDoctors,
          data?.totalPatients,
          data?.unVerifiedDoctors,
          data?.pendingDoctors,
        ],
        hoverOffset: 4,
        backgroundColor: ['#0eec2f', '#f4e409', '#ff0000', '#ffa12b'],
      },
    ],
  };

  const position = responsiveChart ? 'bottom' : 'left';

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

  const handleChangeChartPostion = () => {
    if (window.innerWidth <= 550) {
      setResponsiveChart(true);
    } else {
      setResponsiveChart(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleChangeChartPostion);
    handleChangeChartPostion();
  }, []);

  return (
    <div>
      <Text containerTag="h1" className="text-lg font-medium text-blackColor mb-6">
        Dashabord
      </Text>

      {isLoading || isFetching ? (
        <Loader />
      ) : (
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
                {data?.totalDoctors} Doctors
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
                {data?.unVerifiedDoctors} Doctors
              </Text>
            </div>
            <div className="w-[calc(50%-12px)] rounded-md p-5 shadow-lg border-2 border-lightGray">
              <Text
                containerTag="h6"
                className="md:w-full w-max text-xs text-primary font-semibold md:mb-5 mb-0"
              >
                Pending Doctors :
              </Text>

              <Text
                containerTag="h6"
                className="text-base text-center text-grayColor font-semibold"
              >
                {data?.pendingDoctors} Doctors
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
                {data?.totalPatients} Patients
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
      )}
    </div>
  );
};

export default Dashboard;
