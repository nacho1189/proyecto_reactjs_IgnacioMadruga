import React, { useEffect, useState } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";

const producto = { id: 1, nombre: "Heladera LG", tipo: "Heladera", cantidad: 1, desc: "", precio: 1200,  img:'./imgages/heladera.jpg' };

export const ItemDetilContainer = () => {
    const [data, setData] = useState ({});

    useEffect (() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(producto);
            }, 3000);
        });
        getData.then(res => setData(res));
    }, [])


    
    return (

        <ItemDetail data = {data} />
    );
};

export default ItemDetilContainer;