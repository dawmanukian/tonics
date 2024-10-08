import React from "react";
import "./loading.css";
import { ReactComponent as Logo } from "../../img/Vector.svg";
import  Li from "../../img/Overlaygradient.png";
import { ReactComponent as GradientBottom } from "../../img/Group 1948755405.svg";
import { ReactComponent as GradientTop } from "../../img/Group 1948755406.svg";
import { ReactComponent as GrTop } from "../../img/Vector-1.svg";
import GrBottom from "../../img/o1.png";
import { ReactComponent as Lg } from "../../img/lg.svg";
import Loader from "../../components/loader/Loader";

const Loading = () => {
  return (
    <div className="loading-page">
      <div className="imgs">
        <img width={'100%'} src={GrBottom} className="gr-bottom" />
        <GradientTop className="gradient-top" />
        <Logo />
        <img width={'100%'} src={Li} className="li" />
        <GradientBottom className="gradient-bottom" />
        {/* <GrTop className="gr-top" /> */}
      </div>
      <div className="texts">
        <Lg />
        <p>Tonics Project</p>
        <span>
          A game Where you can work at almost any dream profession from your
          life
        </span>
        <Loader />
      </div>
    </div>
  );
};

export default Loading;
