import React, { useEffect, useState } from 'react';
import Item from './Item';
export default function ItemList(props){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const {category} = props;
    useEffect(() => {
        new Promise((resolve, reject) => {
          setLoading(true);
            let productos = [
              {id:1,category:1,title: "Palo de Hockey",description: "Adidas DF24 90% Carbono 2020",price:"43000",pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_663972-MLA42739147247_072020-O.jpg", stock: 3},
              {id:2,category:1,title: "Palo de Hockey",description: "Adidas DF24 90% Carbono 2019",price:"33000",pictureUrl:"https://thehockeystore.com.ar/wp-content/uploads/2020/06/DF24.jpeg", stock: 2},
              {id:3,category:1,title: "Palo de Hockey",description: "Adidas FTX24 50% Carbono 2020",price:"30000",pictureUrl:"https://thehockeystore.com.ar/wp-content/uploads/2020/03/Palo-Hockey-Adidas-FTX24-Compo-2-4.png", stock: 2},
              {id:4,category:1,title: "Palo de Hockey",description: "Adidas LX24 30% Carbono 2020",price:"23000",pictureUrl:"https://thehockeystore.com.ar/wp-content/uploads/2020/06/adidas-LX24-Compo-3-Aqua.png", stock: 2},
              {id:5,category:1,title: "Palo de Hockey",description: "BRABO TRIBUTE TC3 LB II PINK 30% CARBONO 37,5",price:"20750", pictureUrl:"https://thehockeystore.com.ar/wp-content/uploads/2021/04/tc3_rosa_1-scaled.jpg", stock: 4},
              {id:6,category:1,title: "Palo de Hockey",description: "BRABO WTB ELITE X-1 HYBRID ELB II 100% CARBONO 37,5",price:"53000", pictureUrl:"https://thehockeystore.com.ar/wp-content/uploads/2021/04/315.00104.000_Elite_1_WTB_ELB_Hybrid_Black_Gold_7.jpg", stock: 4},
              {id:7,category:2,title: "Bolso",description: "TK rojo",price:"20430", pictureUrl:"https://thehockeystore.com.ar/wp-content/uploads/2021/05/total2.1_red1-e1622038412697.jpg", stock: 4},
              {id:8,category:2,title: "Bolso",description: "TK azul",price:"20500", pictureUrl:"https://thehockeystore.com.ar/wp-content/uploads/2021/05/total2.1_blue1-e1622038397238.jpg", stock: 6},
              {id:9,category:2,title: "Mochila",description: "Bravo Azul",price:"12500", pictureUrl:"https://thehockeystore.com.ar/wp-content/uploads/2020/05/319.85280.050_backpack_traditional_black_aqua_side-416x416.jpg", stock: 6},
              {id:10,category:2,title: "Mochila",description: "TK negra",price:"9500", pictureUrl:"https://thehockeystore.com.ar/wp-content/uploads/2020/05/319.85280.050_backpack_traditional_black_aqua_side-416x416.jpg", stock: 6},
              {id:11,category:3,title: "Botines",description: "Adidas",price:"21500", pictureUrl:"https://thehockeystore.com.ar/wp-content/uploads/2021/08/Zapatilla_Fabela_Rise_Rosa_FX2011_04_standard.jpeg", stock: 10},
              {id:12,category:3,title: "Botines",description: "Reves fucsia",price:"15500", pictureUrl:"https://thehockeystore.com.ar/wp-content/uploads/2021/08/6a61d414-8956-49b4-baaa-26ffdbf997181-32887303da4d4b802e16301030066093-1024-1024.jpeg", stock: 6},
              {id:13,category:3,title: "Botines",description: "Reves lila",price:"15500", pictureUrl:"https://thehockeystore.com.ar/wp-content/uploads/2021/08/productos-pag-web-121-1c4553972cd26db18816301036961853-1024-1024.png", stock: 6},
              {id:14,category:4,title: "Bocha",description: "Drial Rosa",price:"500", pictureUrl:"https://thehockeystore.com.ar/wp-content/uploads/2020/08/descarga-1.jpeg", stock:200},
              {id:15,category:4,title: "Bocha",description: "Drial Amarillo",price:"500", pictureUrl:"https://thehockeystore.com.ar/wp-content/uploads/2020/08/descarga.jpeg", stock:200},
              {id:16,category:4,title: "Canilleras",description: "DITA verde y negro",price:"5000", pictureUrl:"https://thehockeystore.com.ar/wp-content/uploads/2020/09/CANILLERAS-DITA-ORTHO-PLUS-e1599917833813.jpg", stock:5},
              {id:17,category:4,title: "Guante",description: "Osaka verde y negro",price:"5200", pictureUrl:"https://thehockeystore.com.ar/wp-content/uploads/2020/05/Guante-Osaka-Armadillo-3-0-Iconic-Black.png", stock:6},
              {id:18,category:4,title: "Guante",description: "Total Two gris",price:"3200", pictureUrl:"https://thehockeystore.com.ar/wp-content/uploads/2021/06/Guante-tk-Total-Two-AGX-2.3-NO-PALM-LH-F-e1622643328855.jpg", stock:10},
              {id:19,category:5,title: "Remera",description: "blanca",price:"1000",pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_929066-MLA46819421599_072021-V.jpg", stock: 3},
              {id:20,category:5,title: "Remera",description: "negra",price:"1000",pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_769814-MLA45417429748_042021-O.jpg", stock: 6},
              {id:21,category:5,title: "Remera",description: "azul",price:"1350", pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-LOl1P5a-qwwZGgskEjU274EwbeT0QhAqSyn_j_z1AEts4Xh5xU4OnuXhpE7p7jSGiI&usqp=CAU", stock: 5},
              {id:22,category:5,title: "Remera",description: "fucsia",price:"1000", pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_891440-MLA45093966328_032021-O.jpg", stock: 4},
              {id:23,category:5,title: "Short",description: "negro con calza",price:"2750", pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc96DqrDDnCzXuoDUVmR92oOOEu3VsRUfGnw&usqp=CAU", stock: 4},
              {id:24,category:5,title: "Short",description: "azul",price:"3000", pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8nPu6Zf_2EH9KRc8xAWwDVpA8owt4GIaHsA&usqp=CAU", stock: 4},
              {id:25,category:5,title: "Short",description: "morado",price:"2430", pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRziin7ofvkleozPvIzbn0R6ay4tWnN7azdaw&usqp=CAU", stock: 4},
              {id:26,category:5,title: "Short",description: "fucsia",price:"2500", pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRobZVYccO9rnpx_H0GEUOgaMVzknREfWbZ1Q&usqp=CAU", stock: 6},
          ]
          if(category){
            productos = productos.filter(p => p.category == category);
          }
          
            setTimeout(() => resolve(productos), 2000);
          }).then(response => {
            setProducts(response);
            setLoading(false);
          }).catch(err => console.log(err))
    }, [category, loading]);
    return(
      
        {loading} ?
        <>
            {products.length > 0 && <div> {products.length} RESULTADOS</div>}
            {products.map((product) => <Item key={product.id} {...product}/>)}
        </>
        :
        <> 
          <p> Cargando ...</p>
        </> 
      )
}