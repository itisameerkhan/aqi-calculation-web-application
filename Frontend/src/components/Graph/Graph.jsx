import "./Graph.scss";
import { LineChart } from "@mui/x-charts/LineChart";

const Graph = (props) => {
    console.log(props.data);
  return (
    <div className="graph">
      <h1>Graph</h1>
      <LineChart
        xAxis={[{ data: [100, 200, 300, 400, 500, 600, 700, 800, 900] }]}
        yAxis={[{ data: [100, 200, 300, 400, 500, 600, 700, 800, 900] }]}
        series={[
          {
            data: props.data.map(data => data.aqi),
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
