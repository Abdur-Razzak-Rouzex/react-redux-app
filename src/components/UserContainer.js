import {useEffect} from "react";
import {fetchUsers} from "../redux";
import {useDispatch, useSelector} from "react-redux";


const UserContainer = () => {
    const {error, loading, users} = useSelector(state => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    console.log('user data; ', {error, loading, users});
    return (
        <div>
            <h3>say hi</h3>
        </div>
    )
}

export default UserContainer;