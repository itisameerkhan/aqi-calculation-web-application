import { useState } from "react";
import "./Calculator.scss";
import Button from "@mui/material/Button";
import {
  calculateCO,
  calculateNO2,
  calculateO3,
  calculatePM10,
  calculatePM2_5,
  calculateSO2,
  coFn,
  no2Fn,
  o3Fn,
  pm10Fn,
  pm2_5Fn,
  so2Fn,
} from "../../constants/constants";

const Calculator = () => {
  const [data, setData] = useState(0);
  const [option, setOption] = useState(0);
  const [result, setResult] = useState({
    concentration: 0,
    category: null,
  });

  const handleSubmit = () => {
    console.log(data);
    console.log("option ->", option);
    if (data === 0) return alert("AQI Value required");
    if (option === 0) return alert("Option required");
    if (option == 1) {
      const conc = calculatePM2_5(data);
      setResult({
        ...result,
        concentration: conc,
        category: pm2_5Fn(conc),
      });
    } else if (option == 2) {
      const conc = calculatePM10(data);
      setResult({
        ...result,
        concentration: conc,
        category: pm10Fn(conc),
      });
    } else if (option == 3) {
      const conc = calculateCO(data);
      setResult({
        ...result,
        concentration: conc,
        category: coFn(conc),
      });
    } else if (option == 4) {
      const conc = calculateSO2(data);
      setResult({
        ...result,
        concentration: conc,
        category: so2Fn(conc),
      });
    } else if (option == 5) {
      const conc = calculateO3(data);
      setResult({
        ...result,
        concentration: conc,
        category: o3Fn(conc),
      });
    } else if (option == 6) {
      const conc = calculateNO2(data);
      setResult({
        ...result,
        concentration: conc,
        category: no2Fn(conc),
      });
    }
  };

  const handleReset = () => {
    setData(0);
    setOption(0);
    setResult(0);
  };
  return (
    <div className="calculator">
      <p className="title">AQI to Concentration Calculator</p>
      <p>
        DIRECTIONS: Select a pollutant, then enter the AQI value. Click on
        “Calculate” to see the results.
      </p>
      <div className="calc-input">
        <div>
          <p>Select a Pollutant</p>
          <select
            name="option"
            id="select-option"
            onChange={(e) => setOption(e.target.value)}
            value={option}
          >
            <option value="0">SELECT</option>
            <option value="1">PM2.5 - Particulate microns (24hr avg)</option>
            <option value="2">PM10 - Particulate microns (24hr avg)</option>
            <option value="3">CO - Carbon Monoxide (8hr avg)</option>
            <option value="4">SO2 - Sulfur Dioxide (1hr avg)</option>
            <option value="5">O3 - Ozone (8hr avg)</option>
            <option value="6">NO2 - Nitrogen Dioxide (1hr avg)</option>
          </select>
        </div>
        <div>
          <p>Enter the AQI</p>
          <input
            type="number"
            required
            onChange={(e) => setData(e.target.value)}
            value={data}
          />
        </div>
      </div>
      <div className="calc-btn">
        <Button variant="contained" onClick={handleSubmit}>
          Calculate
        </Button>
        <Button variant="contained" onClick={handleReset}>
          Reset
        </Button>
      </div>
      <div className="calc-result">
        <p>Concentration</p>
        <p className="calc-res">{result.concentration}</p>
      </div>
      <div className="calc-result">
        <p>Units</p>
        <p className="calc-res">ug/m3</p>
      </div>
      <div className="calc-result">
        <p>AQI Category</p>
        <p
          className="calc-res"
          style={{ backgroundColor: result.category?.color }}
        >
          {result.category?.condition || "No Data"}
        </p>
      </div>
      <div className="calc-result">
        <p>Sensitive Groups</p>
        <p className="calc-res">{result.category?.effects || "No Data"}</p>
      </div>
    </div>
  );
};

export default Calculator;
