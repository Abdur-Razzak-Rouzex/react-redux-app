import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import HookIceCreamContainer from "./components/HookIceCreamContainer";
import {Provider} from 'react-redux'
import store from "./redux/store";
import HookKolaContainer from "./components/HookKolaContainer";
import UserContainer from "./components/UserContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <CakeContainer/>
                <HookCakeContainer />
                <HookIceCreamContainer />
                <HookKolaContainer />
                <UserContainer />
            </div>
        </Provider>
    );
}

export default App;
