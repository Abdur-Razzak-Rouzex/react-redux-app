import {useDispatch, useSelector} from "react-redux";
import {buyIceCream} from '../redux'

const HookIceCreamContainer = () => {
    const numOfIceCreams = useSelector(state => state.iceCream.numberOfIceCreams);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of IceCreams - {numOfIceCreams}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy Ice-cream</button>
        </div>
    )
}

export default HookIceCreamContainer