import Item from './Item';

export default function ItemList({products}){
    
    return(
        <div>
          {products.length > 0 && <div> {products.length} RESULTADOS</div>}
          {products.map((product) => <Item key={product.id} {...product}/>)}
        </div>
      )
}