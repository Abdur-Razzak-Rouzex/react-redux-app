import {useDispatch, useSelector} from "react-redux";
import {buyCake} from '../redux'
import {useState} from "react";

const HookCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numberOfCakes);
    const dispatch = useDispatch();
    const [cakeNumber, setCakeNumber] = useState(1);

    return (
        <div>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <input type="number" onChange={(e) => setCakeNumber(e.target.value)}/>
            <button onClick={() => dispatch(buyCake(cakeNumber))}>Buy {cakeNumber} Cake</button>
        </div>
    )
}

export default HookCakeContainer