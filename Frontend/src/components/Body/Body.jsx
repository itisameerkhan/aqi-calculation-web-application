import Display from "../Display/Display";
import Graph from "../Graph/Graph";
import Shimmer from "../Shimmer/Shimmer";
import "./Body.scss";
import { useEffect, useState } from "react";


const Body = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await fetch("https://aqi-backend.onrender.com/api/getaqi");
    const json = await data.json();
    setData(json.data);
  };
  useEffect(() => {
    getData();
  }, []);

  if(data.length == 0) return <Shimmer />

  return (
    <div className="body">
      <Display data={data} />
      <Graph data={data} />
    </div>
  );
};

export default Body;
