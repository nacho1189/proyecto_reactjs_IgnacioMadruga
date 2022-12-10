import React, {useState, useEffect} from 'react';
import Title from '../Ttlie/Title';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const productos = [
    {id: 1, nombre: "Heladera LG", tipo: "Heladera", cantidad: 1, desc: "", precio: 1200,  img:'./imgages/heladera.jpg' },
    {id: 2, nombre: "Samsung Smart Tv 43", tipo: "Tele", cantidad: 1, desc: "", precio: 1100, img:'./imgages/samsung-tv.jpg' },
    {id: 3, nombre: "Iphone 11", tipo: "Celular", cantidad: 1, desc: "", precio: 1200, img: './imgages/celular_iphone_11.jpg'},
];


export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(()=>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve (productos);
            }, 2000);
        });
        if(categoriaId){
            getData.then(res => setData(res.filter(elctrodomesticos=> elctrodomesticos.category === categoriaId)));
        }else{
            getData.then(res => setData(res));

        }
    

    },[categoriaId])

    const onAdd = (quantity) =>{
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <>
        <Title greeting={texto} />
        <ItemCount initial ={1} stock = {6} onAdd = {onAdd} />
        <ItemList data = {data} />
        </>
    );
}

export default ItemListContainer