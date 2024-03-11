import React, { Component, useEffect, useState } from "react";
// import Search from "./Search";
// import Result from "./Result";
import axios from "axios";
// import "./Weat.css";

function Weather() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    Addhandler();
  }, []);
  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=c92cc06629e74da18c041757241201&q=Surat&aqi=no"
      )
      .then((res) => {
        console.log(res);
        setData([res.data.current]);
        setData1([res.data.location]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Addhandler = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=c92cc06629e74da18c041757241201&q=${country}&aqi=no`
      )
      .then((res) => {
        console.log(res.data);
        setData([res.data.current]);
        setData1([res.data.location]);
        setCountry("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <label htmlFor="">City Name</label>
      <input
        type="text"
        className="border input-style"
        name=""
        id=""
        value={country}
        onChange={(evt) => setCountry(evt.target.value)}
      />
      <h1 id="dispaly"></h1>
      <button className="btn btn-primary" onClick={Addhandler}>
        Click
      </button>
      {/* <Search></Search>
        <Result> </Result> */}
      <div className="d-flex justify-content-center mt-10">
        <div
          className="card shadow p-4 bg-dark text-dark bg-img"
          style={{ width: "500px", height: "300px" }}
        >
          <div className="row">
            <div className="col-6">
              {data1.map((el, i) => {
                return (
                  <span>
                    <span className="font-medium text-white">{el.name}</span>
                    <br />
                    <span className="font-mono text-white">{el.localtime}</span>
                  </span>
                );
              })}

              <h4 className="mt-5">
                {data.map((el, i) => {
                  return (
                    <span className="display-4 font-semibold text-white">
                      {el.temp_c}c
                    </span>
                  );
                })}
              </h4>
            </div>
            <div className="col-6">
              {data.map((el, i) => {
                return (
                  <img
                    src={el.condition.icon}
                    className="mt-5"
                    style={{ width: "150px", height: "150px" }}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
