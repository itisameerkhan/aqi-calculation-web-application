import { Gauge } from "@mui/x-charts/Gauge";
import Slider from "@mui/material/Slider";
import "./Display.scss";

const Display = (props) => {

  const { aqi, pm2_5, pm10, pmCO, temperature, humidity } = props.data[props.data.length - 1];

  return (
    <div className="display">
    <h1>Overview</h1>
      <div className="body-inner-1">
        <div className="body-inner-1-left">
          <div>
            <p>AQI</p>
            <Gauge
              width={200}
              height={200}
              value={aqi}
              valueMin={10}
              valueMax={300}
              color="white"
            />
          </div>
        </div>
        <div className="body-inner-1-right">
          <div>
            <div>
              <p>PM 2.5</p>
              <p>{pm2_5} ug/m3</p>
              <Slider
                defaultValue={pm2_5}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </div>
            <div>
              <p>PM 10</p>
              <p>{pm10} ug/m3</p>
              <Slider
                defaultValue={pm10}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </div>
            <div>
              <p>CO</p>
              <p>{pmCO} mg/m3</p>
              <Slider
                defaultValue={pmCO}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </div>
          </div>
          <div>
            <div>
              <p>Temperature</p>
              <p>{temperature} °C</p>
            </div>
            <div>
              <p>Humidity</p>
              <p>{humidity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
