import Display from "../Display/Display";
import Shimmer from "../Shimmer/Shimmer";
import "./Body.scss";
import { useEffect, useState } from "react";


const Body = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await fetch("http://localhost:8080/api/getaqi");
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
    </div>
  );
};

export default Body;
