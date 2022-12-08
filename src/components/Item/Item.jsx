import React from "react";

const Item = ({info}) => {
    return (
        <a href="" className="productos">
            <img src={info.img} alt=""/>
            <p>{info.nombre}</p>
        </a>
    );
}

export default Item;