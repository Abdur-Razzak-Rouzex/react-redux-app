import {kolaKha} from "../redux";
import {useDispatch, useSelector} from "react-redux";

const HookKolaContainer = () => {
    const numOfKola = useSelector(state => state.kola.numberOfKola);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of kola - {numOfKola}</h2>
            <button onClick={() => dispatch(kolaKha())}>কলা খা</button>
        </div>
    )
}

export default HookKolaContainer;