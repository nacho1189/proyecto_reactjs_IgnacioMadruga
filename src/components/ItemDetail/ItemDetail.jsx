import React from "react";

export const ItemDetail = ({data}) => {
    return (
        <div className="contanier">
            <div className="detail">
                <img src= {data.img} alt="" />
                <div className="content">
                    <h1>{data.nombre}</h1>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;