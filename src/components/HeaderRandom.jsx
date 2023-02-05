import React from "react";
import molot from "../Images/molot.png";
import { useState } from "react";
import Sceleton from '../HeaderSceleton/SceletonRandom'

const HeaderRandom = () => {
  const [data, setData] = useState();
  const [isLoader, setIsLoader] = useState(false);

 
  const dataHero = () => {
    setIsLoader(false)
    fetch(
      "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=474fa8782a3e55ebf469441978d799d8&hash=bc93672dbd2056494817babe6cb6769c"
    )
      .then((response) => response.json())
      .then((dataJs) => {
        let number = Math.floor(Math.random() * dataJs.data.results.length);
        setData(dataJs.data.results[number]);
        setIsLoader(true);
      });
  };

  return (
    <div className="header-cards">
      {isLoader ? (
        data && (
          <>
            <div className="cards-random">
              <div className="image-thor">
                <img
                  src={data.thumbnail.path + "." + data.thumbnail.extension}
                  alt=""
                />
              </div>
              <div className="random-block">
                <p>{data.name}</p>
                <span>{data.description}</span>
                <div className="btn-block">
                  <button className="first-btn">HOMEPAGE</button>
                  <button className="second-btn">WIKI</button>
                </div>
              </div>
            </div>
          </>
        )
      ) : (
        <Sceleton />
      )}
      <div className="cards-characters">
        <div className="cards-characters-info">
          <div className="characters-txt">
            <p>Random character for today!</p>
            <span> Do you want to get to know him better?</span>
          </div>
          <div className="characters-block">
            <p>Or choose another one</p>
            <button onClick={() => dataHero()}>TRY IT</button>
          </div>
        </div>
        <div className="image-molot">
          <img src={molot} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderRandom;
