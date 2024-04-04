# AQI Calculations

AQI Calculations is a web application designed to provide comprehensive information and calculations related to Air Quality Index (AQI) readings. It aims to empower users with data-driven insights into air quality and its impact on health and the environment.

## Key Features

## 1. Home Page
The Home page serves as the central hub for displaying measured AQI calculations. It provides real-time readings fetched from the database, offering insights into various air quality parameters such as:

* **AQI (Air Quality Index)**: A numerical value indicating the overall air quality at a specific location.

* **PM2.5 and PM10**: Particulate matter concentrations, representing fine particles in the air with diameters of 2.5 micrometers or less and 10 micrometers or less, respectively.

* **CO (Carbon Monoxide)**: Concentration of carbon monoxide in the air, a colorless and odorless gas emitted from vehicles and combustion processes.

* **Temperature and Humidity**: Environmental factors influencing air quality and human comfort levels.
In addition to displaying raw data, the Home page features intuitive graphical representations, such as charts and graphs, to enhance data visualization and interpretation.

## 2. Search Page

The Search page offers users the ability to search for air quality information by city. Leveraging external API resources, the page retrieves real-time data on various air quality parameters, including:

* **AQI**: Current Air Quality Index for the specified city.

* **PM2.5 and PM10**: Particulate matter concentrations, crucial for assessing air pollution levels.

* **CO, NH3, and SO2**: Concentrations of carbon monoxide, ammonia, and sulfur dioxide, respectively, contributing to air pollution and health risks.

* **AQI Category**: Categorization of air quality based on predefined thresholds, enabling users to quickly assess the severity of pollution levels.

The Search page provides a user-friendly interface for accessing air quality information across different locations, empowering users to make informed decisions about their surroundings and activities.

## 3. Calculator Page

The Calculator page offers a comprehensive tool for calculating air quality parameters based on manual input. Users can input readings for various pollutants, including:

* **PM2.5 and PM10**: Particulate matter concentrations, measured in micrograms per cubic meter (µg/m³).

* **CO, SO2, O3, and NO2**: Concentrations of carbon monoxide, sulfur dioxide, ozone, and nitrogen dioxide, respectively, in parts per million (ppm) or parts per billion (ppb).
Utilizing established algorithms and conversion factors, the Calculator page computes the concentration levels of pollutants and maps them to corresponding AQI categories. Additionally, it provides insights into sensitive groups affected by different AQI levels, helping users understand the potential health risks associated with air pollution exposure.

## Technologies Utilized

* **React**: Frontend framework for building interactive user interfaces.

* **MongoDB**: NoSQL database for storing and managing air quality data.
* **Express.js**: Web application framework for building APIs and server-side logic.
* **Node.js**: JavaScript runtime environment for executing server-side code.
* **Material-UI (MUI)**: UI component library for designing modern and responsive user interfaces.
* **Redux**: State management library for managing application state and data flow.

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,sass,javascript,react,redux,nodejs,expressjs,mui,git,vercel,vite,babel,vscode,postman" />
  </a>
</p>

## Project Setup and Installation

**Clone Repository**: Clone the repository to your local machine using git clone.

```cmd
git clone https://github.com/itisameerkhan/aqi-calculation-web-application.git
```

**Install Dependencies**: Run npm install to install project dependencies.

```cmd
npm install
```

**Start Development Server**: Use npm start to start the development server and launch the application.
Access Application: Open your web browser and navigate to `http://localhost:5173` to access the application.

**FrontEnd**

```
npm run dev
```

**BackEnd**

```
npm start
```
## Contributing
Contributions to AQI Calculations are welcome! If you have any ideas, suggestions, or improvements, feel free to submit issues or pull requests on GitHub.
