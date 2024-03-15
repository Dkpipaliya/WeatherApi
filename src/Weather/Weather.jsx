import React, { Component, useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

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
        "http://api.weatherapi.com/v1/current.json?key=c61cceb3c4414c76b4b81539241403&q=Surat&aqi=no"
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
        `http://api.weatherapi.com/v1/current.json?key=c61cceb3c4414c76b4b81539241403&q=${country}&aqi=no`
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
    <div className="">
      <div className="Input-box">
        <label htmlFor="">City Name:</label>
        <input
          type="text"
          className="border input-style"
          name=""
          id=""
          value={country}
          onChange={(evt) => setCountry(evt.target.value)}

        />
        <h1 id="dispaly"></h1>
        <button className="btn btn-primary ml-2" onClick={Addhandler}>
        <FaSearch />
        </button>
      </div>
      {/* <Search></Search>
        <Result> </Result> */}
      <div className="d-flex justify-content-center mt-10">
        <div
          className="card shadow p-4 bg-dark text-dark bg-img shadow-2xl "
          style={{ width: "600px", height: "300px" }}
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
                    <>
                    <span className="display-4 font-semibold text-white">
                      {el.temp_c}c
                    </span>
                    <span className="text-white font-bold mt-6 block">Pressure:{el.pressure_in}</span>
                    <span className="text-white font-bold mt-6 block">Wind:{el.wind_mph}mph</span>
                    </>
                  );
                })}
              </h4>
            </div>
            <div className="col-6">
              {data.map((el, i) => {
                return (
                  <>
                  <span className="text-white font-bold text-4xl mt-3 ">{el.condition.text}</span>
                  <img
                    src={el.condition.icon}
                    className=""
                    style={{ width: "200px", height: "200px" }}
                    alt="" />
                    </>
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
