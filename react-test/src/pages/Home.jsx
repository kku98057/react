import React from "react";
import { Link } from "react-router-dom";
import MoveBtn from "../components/MoveBtn";
import Bears from "../layout/Bears";
import useStore from "../store";
import "../pages/home.module.css";
function Home(props) {
  const { bears, increasePopulation, removeAllBears } = useStore(
    (state) => state
  );

  return (
    <div className="wrap">
      <Link to="/next" state={{ bears, increasePopulation, removeAllBears }}>
        <MoveBtn fontSize="20"></MoveBtn>
      </Link>
      <Bears
        bears={bears}
        increasePopulation={increasePopulation}
        removeAllBears={removeAllBears}
      ></Bears>
    </div>
  );
}

export default Home;
