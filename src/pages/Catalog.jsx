import ItemListContainer from '../components/ItemListContainer';
import {useParams} from "react-router-dom";
export default function Catalog(){
    const {id} = useParams();
    return(
        <>
        <ItemListContainer category={id}/>
        </>
    )
}