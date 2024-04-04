import "./TableData.scss";

const TableData = (props) => {
  console.log(props.data);
  return (
    <div className="table">
        <h1>Table</h1>
        <table>
          <tr>
            <th>PM 2.5</th>
            <th>PM 10</th>
            <th>CO</th>
            <th>Temperature</th>
            <th>Humidity</th>
          </tr>
          {props.data.map((data) => (
            <tr>
              <td>{data.pm2_5}</td>
              <td>{data.pm10}</td>
              <td>{data.pmCO}</td>
              <td>{data.temperature}</td>
              <td>{data.humidity}</td>
            </tr>
          ))}
        </table>
    </div>
  )
}

export default TableData;