import ItemListContainer from '../components/ItemListContainer';
import {useParams} from "react-router-dom";
export default function Catalog(){
    const {categoryId} = useParams();
    return(
        <>
        <ItemListContainer categoryId={categoryId}/>
        </>
    )
}