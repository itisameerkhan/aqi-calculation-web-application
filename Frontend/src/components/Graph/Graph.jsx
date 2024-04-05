import "./Graph.scss";
import { LineChart } from "@mui/x-charts/LineChart";

const Graph = (props) => {
  const datas = props.data.slice(-9);
  return (
    <div className="graph">
      <h1>Graph</h1>
      <LineChart
        xAxis={[{ data: [100, 200, 300, 400, 500, 600, 700, 800, 900] }]}
        yAxis={[{ data: [100, 200, 300, 400, 500, 600, 700, 800, 900] }]}
        series={[
          {
            data: datas.map(datas => datas.aqi),
            // area: true,
          },
        ]}
        width={1200}
        height={500}
      />
    </div>
  );
};

export default Graph;
