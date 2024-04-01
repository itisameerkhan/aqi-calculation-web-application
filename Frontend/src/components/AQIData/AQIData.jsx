import "./AQIData.scss";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import {
  coFn,
  no2Fn,
  o3Fn,
  pm10Fn,
  pm2_5Fn,
  so2Fn,
} from "../../constants/constants";

const AQIData = () => {
  const aqiData = useSelector((store) => store.aqiSlice.data);

  if (aqiData === null || aqiData.success === false)
    return (
      <div className="aqi-data-load">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/021/975/492/small/search-not-found-3d-render-icon-illustration-with-transparent-background-empty-state-png.png"
          alt=""
        />
        <h1>No Result Found</h1>
      </div>
    );

  if (aqiData?.success == "loading")
    return (
      <div className="aqi-data-load">
        <Loader />
      </div>
    );

  const { name, state } = aqiData.location[0];
  const { co, no, no2, o3, so2, pm2_5, pm10, nh3 } =
    aqiData.aqi.list[0].components;

  const data = coFn(co);
  console.log(data);

  return (
    <div className="aqi-data">
      <h2>
        {name}, {state}
      </h2>
      <div className="data-1">
        <h3>Carbon Monoxide</h3>
        <p>AQI Index - {co}</p>
        <div>
          <p>AQI Category - {coFn(co).condition}</p>
          <p style={{ backgroundColor: coFn(co).color }}></p>
        </div>
      </div>
      <div className="data-1">
        <h3>Nitrogen Oxide</h3>
        <p>AQI Index - {no}</p>
      </div>
      <div className="data-1">
        <h3>Nitrogen Dioxide</h3>
        <p>AQI Index - {no2}</p>
        <div>
          <p>AQI Category - {no2Fn(no2).condition}</p>
          <p style={{ backgroundColor: no2Fn(no2).color }}></p>
        </div>
      </div>
      <div className="data-1">
        <h3>Ozone</h3>
        <p>AQI Index - {o3}</p>
        <div>
          <p>AQI Category - {o3Fn(o3).condition}</p>
          <p style={{ backgroundColor: o3Fn(o3).color }}></p>
        </div>
      </div>
      <div className="data-1">
        <h3>Particulate Matter 2.5</h3>
        <p>AQI Index - {pm2_5}</p>
        <div>
          <p>AQI Category - {pm2_5Fn(pm2_5).condition}</p>
          <p style={{ backgroundColor: pm2_5Fn(pm2_5).color }}></p>
        </div>
      </div>
      <div className="data-1">
        <h3>Particulate Matters 10</h3>
        <p>AQI Index - {pm10}</p>
        <div>
          <p>AQI Category - {pm10Fn(pm10).condition}</p>
          <p style={{ backgroundColor: pm10Fn(pm10).color }}></p>
        </div>
      </div>
      <div className="data-1">
        <h3>Sulphur Dioxide</h3>
        <p>AQI Index - {so2}</p>
        <div>
          <p>AQI Category - {so2Fn(so2).condition}</p>
          <p style={{ backgroundColor: so2Fn(so2).color }}></p>
        </div>
      </div>
      <div className="data-1">
        <h3>Ammonia</h3>
        <p>AQI Index - {nh3}</p>
      </div>
    </div>
  );
};

export default AQIData;
