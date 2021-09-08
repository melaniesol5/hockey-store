import ItemDetailContainer from '../components/ItemDetailContainer';
import {useParams} from "react-router-dom";
export default function Detail(){
    const {id} = useParams();
    console.log("sjkdslks");
    return(
        <>
        <ItemDetailContainer id={id}/>
        </>
    )
}