import { useEffect, useState } from "react";
import CardContainer from "../containers/card-container";
import FilterContainer from "../containers/filter-container";
import React from "react"
import CustomHead from "../containers/head";

const buttonArray = [
  { year: 2006, id: 1 },
  { year: 2007, id: 2 },
  { year: 2008, id: 3 },
  { year: 2009, id: 4 },
  { year: 2010, id: 5 },
  { year: 2011, id: 6 },
  { year: 2012, id: 7 },
  { year: 2013, id: 8 },
  { year: 2014, id: 9 },
  { year: 2015, id: 10 },
  { year: 2016, id: 11 },
  { year: 2017, id: 12 },
]

const launchArray = [
  { launch: true, id: 1 },
  { launch: false, id: 2 }
]

const landArray = [
  { land: true, id: 1 },
  { land: false, id: 2 }
]

export const appData = React.createContext()

function Home() {
  const [data, setData] = useState([])
  const [year, setYear] = useState(null)
  const [launch, setLaunch] = useState(null)
  const [success, setSuccess] = useState(null)
  const [id, setId] = useState("")

  useEffect(() => {
    setYear(JSON.parse(localStorage.getItem("year")) || "")
    setLaunch(JSON.parse(localStorage.getItem("launch")) || "")
    setSuccess(JSON.parse(localStorage.getItem("success")) || "")
  }, [])

  useEffect(() => {
    if (year === null || launch === null || success === null) return;
    onFetchData(year, launch, success);
  }, [year, launch, success])

  const onFetchData = (year, launch, success) => {
    fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${year}&launch_success=${launch}&landing_sucess=${success}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("response", res)
        setData(res)
      })
      .catch((err) => {
        console.log(err)
      });
  };

  const onChangeYear = (yearTemp, id) => {
    let newYear = yearTemp;
    if (yearTemp === year) newYear = "";
    localStorage.setItem("year", JSON.stringify(newYear));
    setYear(newYear);
    setId(id)
  };

  const onChangeLaunch = (launchTemp) => {
    let newLaunch = launchTemp;
    if (launchTemp === launch) newLaunch = "";
    localStorage.setItem("launch", JSON.stringify(newLaunch));
    setLaunch(newLaunch);
  };

  const onChangeSuccess = (successTemp) => {
    let newSuccess = successTemp;
    if (successTemp === success) newSuccess = "";
    localStorage.setItem("success", JSON.stringify(newSuccess));
    setSuccess(newSuccess);
  };

  return (
    <appData.Provider value={{ launchArray: launchArray, landArray: landArray, buttonArray: buttonArray, }}>
      <CustomHead />
      <div className="app_container ">
        <div className="col-12">
          <h3 className="font-weight-bold py-2">Spacex Launch Programs</h3>
        </div>
        <div className="row mx-0">
          <div className="col-sm-12 col-xl-3">
            <FilterContainer
              handleYearClick={onChangeYear}
              handleLaunchClick={onChangeLaunch}
              handleSucessClick={onChangeSuccess}
              id={id} />
          </div>
          <div className="col-sm-12 col-xl-9">
            <CardContainer data={data} />
          </div>
        </div>
      </div>
      <style jsx>
        {`
        .app_container{
          background-color: #f2f2f2;
        }
        `}
      </style>
    </appData.Provider>
  );

}

export default Home;
Home.displayName = "Demo"