import React, { useEffect, useState } from 'react';
import Salespoint from './Salespoint';
export default function SalespointsListContainer(){
    const [salespoints, setSalespoints] = useState([]);
    useEffect(() => {
        new Promise((resolve, reject) => {
            const sucursales = [
                {id:1, title:"The Hockey Store Lanus", image:"https://thehockeystore.com.ar/wp-content/uploads/2021/02/Captura-de-pantalla-2021-02-21-a-las-00.58.42.png"},
                {id:2, title:"The Hockey Store Banfield", image:"https://thehockeystore.com.ar/wp-content/uploads/2021/02/Captura-de-pantalla-2021-02-21-a-las-00.58.42.png"}
            ]
            setTimeout(() => resolve(sucursales), 2000);
        }).then(response => {
            setSalespoints(response);
        }).catch(err => console.log(err));
    }, []);
    return(
        <>
        {salespoints.map(sp => <Salespoint key={sp.id} {...sp}/>)}
       </>
    )
}