import ItemDetailContainer from '../components/ItemDetailContainer';
import {useParams} from "react-router-dom";
export default function Detail(){
    const {id} = useParams();
    return(
        <>
        <ItemDetailContainer id={id}/>
        </>
    )
}