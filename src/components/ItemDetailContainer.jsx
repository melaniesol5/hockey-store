import ItemDetail from './ItemDetail';
import React, { useEffect, useState } from 'react';
import {productsJson} from '../products.json';
import Spinner from 'react-bootstrap/Spinner'

export default function ItemDetaiContainer(props){
    const {id} = props;
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        new Promise((resolve,reject) => {
            setLoading(true);
            setTimeout(() => resolve(productsJson.filter(item => item.id === id)), 2000)
        }).then((data) => setItem(data[0]))
        .finally(() => {
            setLoading(false);
        })
    }, [id]);
    return (
        <>
          {loading ? 
          (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
          ): 
          <ItemDetail item={item} />}
        </>
         )
}