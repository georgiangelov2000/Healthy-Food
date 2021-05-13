import React from "react";
import PublicFood from "../Foods/PublicFood/PublicFood";
import style from "./Main.module.css";

const Main = (props) => {
  return (
    <main className={style.main}>
      <PublicFood />
    </main>
  );
};

export default Main;
