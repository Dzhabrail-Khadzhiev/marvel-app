import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import full from "../Images/all.png";
import avengers from "../Images/avengers.png";
import { Link } from "react-router-dom";

function Comics() {
  const [newItem, setNewItem] = useState([]);
  const [navigation, setNavigation] = useState(8);

  const fetchComics = async () => {
    const res = await fetch(
      "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=474fa8782a3e55ebf469441978d799d8&hash=bc93672dbd2056494817babe6cb6769c"
    );
    const resultRes = await res.json();
    setNewItem(resultRes.data.results);
  };
  useEffect(() => {
    fetchComics();
  }, []);

  return (
    <div className="comics-main">
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
      <div className="comics-content">
        {newItem.slice(0, navigation).map((newItem) => (
          <Link to={`/comics/${newItem.id}`}>
            <div
              className="comics-cards"
              onClick={() => fetchComics(newItem.id)}
            >
              <img
                src={newItem.thumbnail.path + "." + newItem.thumbnail.extension}
                alt=""
              />
              <p>{newItem.title}</p>
              {newItem.prices[0].price > 0 ? (
                <span>{newItem.prices[0].price}$</span>
              ) : (
                <span>NOT AVAILABLE</span>
              )}
            </div>
          </Link>
        ))}
      </div>
      <div className="comics-btn">
        <button
          onClick={() =>
            newItem.length > navigation && setNavigation(navigation + 12)
          }
        >
          LOAD MORE
        </button>
      </div>
    </div>
  );
}

export default Comics;
