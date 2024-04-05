import "./TableData.scss";

const TableData = (props) => {
  return (
    <div className="table">
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>PM 2.5</th>
            <th>PM 10</th>
            <th>CO</th>
            <th>Temperature</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((data, index) => (
            <tr key={index}>
              <td>{data.pm2_5}</td>
              <td>{data.pm10}</td>
              <td>{data.pmCO}</td>
              <td>{data.temperature}</td>
              <td>{data.humidity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
