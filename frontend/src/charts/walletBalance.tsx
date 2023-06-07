import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface SPLWallet extends Token {
  balance: number;
}

type Props = { data: SPLWallet[] };

function WalletBalance(props: Props) {
  const balanceData = props.data.map((x) => {
    return x.balance;
  });

  const seriesData = [{ data: balanceData }];
  const categories = props.data.map((x) => {
    return x.name;
  });

  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 360,
          },
        },
      },
    ],
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: categories,
      labels: {
        show: false,
      },
    },
  };

  return (
    <>
      <Chart options={options} series={seriesData} type="bar" height={500} />
    </>
  );
}

export default WalletBalance;
