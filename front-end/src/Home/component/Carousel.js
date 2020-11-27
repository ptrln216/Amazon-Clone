import React, { useState } from "react";
import "./Carousel.css";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";

function Carousel({ items }) {
    const [x, setX] = useState(0);

    const goLeft = () => {
        x === 0 ? setX(-100 * (items.length - 1)) : setX(x + 100);
        console.log(x);
    };
    const goRight = () => {
        x === -100 * (items.length - 1) ? setX(0) : setX(x - 100);
        console.log(x);
    };

    return (
        <div className="carousel">
            {items.map((item) => (
                <div
                    className="carousel__item"
                    style={{ transform: `translate(${x}%)` }}
                >
                    <img src={item} alt="" />
                </div>
            ))}
            <div id="goLeft" onClick={goLeft}>
                <ArrowBackIosRoundedIcon className="carousel__navButton" />
            </div>
            <span id="goRight" onClick={goRight}>
                <ArrowForwardIosRoundedIcon className="carousel__navButton" />
            </span>
        </div>
    );
}

export default Carousel;
