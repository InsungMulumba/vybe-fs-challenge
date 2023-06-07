import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface SPLToken extends Token {
  marketCap: number;
}

type Props = { data: SPLToken[] };

function MarketCap(props: Props) {
  const series = props.data.map((x) => {
    return x.marketCap;
  });

  const chartLabels = props.data.map((x) => {
    return x.name;
  });

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "pie",
    },
    labels: chartLabels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 360,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <>
      {series?.length ? (
        <Chart
          type={"pie"}
          series={series}
          options={options}
          height={500}
          test-id="chart"
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default MarketCap;
