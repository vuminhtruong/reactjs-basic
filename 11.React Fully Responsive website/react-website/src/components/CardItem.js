import React from "react";

function CardItem(props) {
    return (
    <div className="cards-item">
        <img src={props.src} alt="loaction" />
          <div className="item-container">
            <h2>
                {props.title}
            </h2>
            <p>
                {props.text}
            </p>
            <a href="#" className="text-button">
                Read More
                <span className="material-symbols-outlined">
                    arrow_right_alt
                </span>
            </a>
          </div>
    </div>
    )
}

export default CardItem;