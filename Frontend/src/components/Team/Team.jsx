import "./Team.scss";
import img1 from "../../assets/nivas.png";
import img2 from "../../assets/vishwa.jpeg";
import img3 from "../../assets/img3.jpg";

const Team = () => {
  return (
    <div className="team">
      <div className="cards">
        <div className="card">
          <img src={img1} alt="" />
          <p>Nivas S</p>
          <p>
            Led hardware setup and integration, including configuring the ESP32
            microcontroller, interfacing with sensors, and ensuring seamless
            device operation.
          </p>
          <div>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div className="card">
          <img src={img2} alt="" />
          <p>Vishwa M</p>
          <p>
            Spearheaded the development of real-time data acquisition and
            transmission protocols, leveraging MQTT or HTTP to facilitate
            communication between the ESP32 device and the cloud server.
          </p>
          <div>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div className="card">
          <img src={img3} alt="" />
          <p>Kalaiselvan R</p>
          <p>
            Orchestrated the implementation of the cloud-based data processing
            and visualization system and dashboard creation to effectively
            display air quality metrics and insights.
          </p>
          <div>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
