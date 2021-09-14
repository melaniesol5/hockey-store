
import React, { useEffect, useState } from 'react';
import {productsJson} from '../products.json';
import ItemList from './ItemList';
import Spinner from 'react-bootstrap/Spinner';
export default function ItemListContainer({categoryId}){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        new Promise((resolve, reject) => {
          setLoading(true);
            setTimeout(() => resolve(categoryId ? productsJson.filter(p => p.category === categoryId) : productsJson), 3000);
          }).then(response => {
            setProducts(response);
          }).catch(err => console.log(err))
          .finally(() => {
            setLoading(false);
        })
    }, [categoryId]);
    return (
    <>
      {loading ? (
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      ):<ItemList products={products} /> }
     </>)
}