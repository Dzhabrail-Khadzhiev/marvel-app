import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "./Skeleton";

function Hero() {
  const [item, setItem] = useState([]);
  const [pagination, setPagination] = useState(9);
  const [heroBio, setHeroBio] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchHero = async () => {
    const res = await fetch(
      "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=474fa8782a3e55ebf469441978d799d8&hash=bc93672dbd2056494817babe6cb6769c"
    );
    const resultRes = await res.json();
    setItem(resultRes.data.results);
  };
  useEffect(() => {
    fetchHero();
  }, []);

  const submitHero = async (id) => {
    setIsLoading(false);
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=474fa8782a3e55ebf469441978d799d8&hash=bc93672dbd2056494817babe6cb6769c`
    );
    const resultRes = await res.json();
    setHeroBio(resultRes.data.results);
    setIsLoading(true);
  };

  return (
    <div className="main">
      <div className="main-content">
        <div className="hero-content">
          {item.slice(0, pagination).map((item) => (
            <div className="hero-cards" onClick={() => submitHero(item.id)}>
              <img
                src={item.thumbnail.path + "." + item.thumbnail.extension}
                alt=""
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        <div className="characters-cards-info">
          {isLoading ? (
            heroBio.map((item) => {
              return (
                <>
                  <div className="characters-cards-block">
                    <div className="characters-cards-image">
                      <img
                        src={
                          item.thumbnail.path + "." + item.thumbnail.extension
                        }
                        alt=""
                      />
                    </div>
                    <div className="characters-cards-btn">
                      <p>{item.name}</p>
                      <Link to={`/hero/${item.id}`}>
                        <button className="cards-first-btn">HOMEPAGE</button>
                      </Link>
                      <button className="cards-second-btn">WIKI</button>
                    </div>
                  </div>
                  <div className="characters-cards-txt">
                    <p>{item.description}</p>
                  </div>
                </>
              );
            })
          ) : (
            <Skeleton />
          )}
        </div>
      </div>
      <div className="hero-btn">
        <button
          onClick={() =>
            item.length > pagination && setPagination(pagination + 9)
          }
        >
          LOAD MORE
        </button>
      </div>
    </div>
  );
}

export default Hero;
