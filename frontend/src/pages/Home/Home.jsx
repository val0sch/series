import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import Card from "@components/Card/Card";

export default function Home() {
  const ENDPOINT = "http://localhost:5050/api/series";

  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios.get(ENDPOINT).then(function (response) {
      setSeries(response.data.map((e) => e));
    });
  }, []);

  return (
    <div className="home">
      <h1>Toutes mes séries</h1>
      <ul>
        {series.map((serie) => (
          <li key={serie.id}>
            <Card
              title={serie.title}
              picture={serie.picture}
              release_date={serie.releaseDate}
              genre={serie.genre}
              rate={serie.rate}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
