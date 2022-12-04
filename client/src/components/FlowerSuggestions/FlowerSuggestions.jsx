/** @format */

import React from "react";
import "./FlowerSuggestions.scss";
import userImg from "../Header/tempImg/293868842_442013060903697_3099029517532529372_n.jpg";

const FlowerSuggestions = () => {
  return (
    <>
      <div className="suggestions-cont">
        <div className="cont-header">
          <span className="header-title">Suggestions For You</span>
          <div className="see-all-btn">
            <span>
              <a href="/">See all</a>
            </span>
          </div>
        </div>

        <div className="Suggestions-data">
          <div className="Suggestions">
            <div className="img-box">
              <a href="/">
                <img className="img" src={userImg} alt="" />
              </a>
            </div>
            <div className="text-data-box">
              <div className="user-name">
                <a href="/">ananda484</a>
              </div>
              <div className="user-mess">
                <span>Suggestions For You</span>
              </div>
            </div>
            <div className="following-btn">
              <a href="/">follow</a>
            </div>
          </div>
          <div className="Suggestions">
            <div className="img-box">
              <a href="/">
                <img className="img" src={userImg} alt="" />
              </a>
            </div>
            <div className="text-data-box">
              <div className="user-name">
                <a href="/">ananda484</a>
              </div>
              <div className="user-mess">
                <span>Suggestions For You</span>
              </div>
            </div>
            <div className="following-btn">
              <a href="/">follow</a>
            </div>
          </div>
          <div className="Suggestions">
            <div className="img-box">
              <a href="/">
                <img className="img" src={userImg} alt="" />
              </a>
            </div>
            <div className="text-data-box">
              <div className="user-name">
                <a href="/">ananda484</a>
              </div>
              <div className="user-mess">
                <span>Suggestions For You</span>
              </div>
            </div>
            <div className="following-btn">
              <a href="/">follow</a>
            </div>
          </div>
          <div className="Suggestions">
            <div className="img-box">
              <a href="/">
                <img className="img" src={userImg} alt="" />
              </a>
            </div>
            <div className="text-data-box">
              <div className="user-name">
                <a href="/">ananda484</a>
              </div>
              <div className="user-mess">
                <span>Suggestions For You</span>
              </div>
            </div>
            <div className="following-btn">
              <a href="/">follow</a>
            </div>
          </div>
          <div className="Suggestions">
            <div className="img-box">
              <a href="/">
                <img className="img" src={userImg} alt="" />
              </a>
            </div>
            <div className="text-data-box">
              <div className="user-name">
                <a href="/">ananda484</a>
              </div>
              <div className="user-mess">
                <span>Suggestions For You</span>
              </div>
            </div>
            <div className="following-btn">
              <a href="/">follow</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlowerSuggestions;
