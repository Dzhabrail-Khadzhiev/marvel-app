import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import full from "../Images/all.png";
import avengers from "../Images/avengers.png";

const FullHero = () => {
  const { id } = useParams();
  const [heroBio, setHeroBio] = useState();
  const submitHero = async () => {
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=474fa8782a3e55ebf469441978d799d8&hash=bc93672dbd2056494817babe6cb6769c`
    );
    const resultRes = await res.json();
    setHeroBio(resultRes.data.results);
  };
  
  useEffect(() => {
    submitHero();
  }, []);

  return (
    <div className="characters-main">
      <div className="characters-content-header">
        <div className="characters-first-image">
          <img src={full} alt="" />
        </div>
        <div className="characters-text-block">
          <p>New comics every week! Stay tuned!</p>
        </div>
        <div className="characters-second-image">
          <img src={avengers} alt="" />
        </div>
      </div>
      {heroBio &&
        heroBio.map((item) => {
          return (
            <div className="characters-main-content">
              <div className="characters-main-image">
                <img
                  src={item.thumbnail.path + "." + item.thumbnail.extension}
                  alt=""
                />
              </div>
              <div className="characters-main-info">
                <p>{item.name}</p>
                <span>{item.description}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FullHero;
