import React, { useState, useEffect } from 'react';
import Title from '../Ttlie/Title';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const productos = [
    { id: 1, title: "Interestellar", tipo: "Pelicula", desc: "", img: 'https://hbomax-images.warnermediacdn.com/images/GYGP7pwQv_ojDXAEAAAFc/tileburnedin?size=1280x720&partner=hbomaxcom&v=bd4e8b8745a1fcccbb19d76012ae572e&host=art-gallery.api.hbo.com&language=es-419&w=1280' },
    { id: 2, title: "Avatar", tipo: "Pelicula", desc: "", img: 'https://as01.epimg.net/meristation/imagenes/2022/09/30/reportajes/1664534991_626157_1664615989_noticia_normal.jpg' },
    { id: 3, title: "Friends", tipo: "Serie", desc: "", img: 'https://hbomax-images.warnermediacdn.com/images/GXdbR_gOXWJuAuwEAACVH/tileburnedin?size=1280x720&partner=hbomaxcom&v=6a409f09891f75549fdb8d07dc969b63&host=art-gallery.api.hbo.com&language=es-419&w=1280' },
];


export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(Pelicula => Pelicula.tipo === categoriaId)));
        } else {
            getData.then(res => setData(res));

        }


    }, [categoriaId])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <>
            <Title greeting={texto} />
            <ItemCount initial={1} stock={6} onAdd={onAdd} />
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer