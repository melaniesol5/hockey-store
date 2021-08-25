
import ItemDetail from './ItemDetail';
import React, { useEffect, useState } from 'react';
export default function ItemDetaiContainer(props){
    const [items, setItems] = useState([]);
    const getItems = async() => {
        const products = [];
        const productos = [
            {id:1,title: "Remera",description: "blanca",price:"1000",pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_929066-MLA46819421599_072021-V.jpg", stock: 3},
            {id:2,title: "Remera",description: "negra",price:"1000",pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_769814-MLA45417429748_042021-O.jpg", stock: 6},
            {id:3,title: "Remera",description: "azul",price:"1350", pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-LOl1P5a-qwwZGgskEjU274EwbeT0QhAqSyn_j_z1AEts4Xh5xU4OnuXhpE7p7jSGiI&usqp=CAU", stock: 5},
            {id:4,title: "Remera",description: "fucsia",price:"1000", pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_891440-MLA45093966328_032021-O.jpg", stock: 4},
            {id:4,title: "Short",description: "negro con calza",price:"2750", pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc96DqrDDnCzXuoDUVmR92oOOEu3VsRUfGnw&usqp=CAU", stock: 4},
            {id:4,title: "Short",description: "azul",price:"3000", pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8nPu6Zf_2EH9KRc8xAWwDVpA8owt4GIaHsA&usqp=CAU", stock: 4},
            {id:4,title: "Short",description: "morado",price:"2430", pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRziin7ofvkleozPvIzbn0R6ay4tWnN7azdaw&usqp=CAU", stock: 4},
            {id:4,title: "Short",description: "fucsia",price:"2500", pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRobZVYccO9rnpx_H0GEUOgaMVzknREfWbZ1Q&usqp=CAU", stock: 6},
          ]
            setTimeout(() => productos.map((i)=>products.push(i)), 2000);
            setItems(products);
    }
    useEffect(() => {
        getItems();
    }, []);
    return(
        <div>
            {items.map((product) => <ItemDetail key={product.id} {...product}/>)}
        </div>
    );
}