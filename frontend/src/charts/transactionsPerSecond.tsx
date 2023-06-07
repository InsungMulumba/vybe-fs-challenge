import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

type Props = { data: number[] };

function TransactionsPerSecond(props: Props) {
  const series = [{ name: "Transactions Per Second", data: props.data }];

  const renderCategories = () => {
    const categories = [];

    for (let i = 0; i <= 10; i++) {
      categories[i] = `${i} minutes ago`;
    }
    return categories.reverse();
  };
  const options: ApexOptions = {
    chart: {
      width: 450,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Transactions Per Second History",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
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
    xaxis: {
      categories: renderCategories(),
      labels: {
        show: false,
      },
    },
  };
  return <Chart options={options} series={series} type="line" height={500} />;
}

export default TransactionsPerSecond;
