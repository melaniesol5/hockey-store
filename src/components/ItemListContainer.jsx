import ItemCount from './ItemCount';
export default function ItemListContainer(props){
    function onAdd(stock){
        let products = []
        products.push({
          stock
        });
      }
    
    return(
        <>
       <ItemCount stock={5} initial={1} onAdd={(count) => onAdd(count)} />
       </>
    )
}