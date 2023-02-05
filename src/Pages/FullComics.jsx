import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import full from "../Images/all.png";
import avengers from "../Images/avengers.png";

function FullComics() {
  const { id } = useParams();
  const [comicsBio, setComicsBio] = useState();
  const submitComics = async () => {
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=474fa8782a3e55ebf469441978d799d8&hash=bc93672dbd2056494817babe6cb6769c`
    );
    const resultRes = await res.json();
    setComicsBio(resultRes.data.results);
  };

  useEffect(() => {
    submitComics();
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
      {comicsBio &&
        comicsBio.map((item) => {
          return (
            <div className="characters-comics-content">
              <div className="characters-comics-image">
                <img
                  src={item.thumbnail.path + "." + item.thumbnail.extension}
                  alt=""
                />
              </div>
              <div className="characters-comics-info">
                <span>{item.series.name}</span>
                <p>{item.description}</p>
                <p>{item.pageCount} pages</p>
                <p>Language: {item.textObjects[0].language}</p>
                <div className="price-block">
                  <p>{item.prices[0].price}$</p>
                </div>
              </div>
              <div className="back-block">
                <p>Back to all</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default FullComics;

// item.description === ""
//                     ? `Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?`
//                     :
