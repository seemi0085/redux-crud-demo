import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser} from "../Redux/Action/action";

function List({user}) {
    const dispatch = useDispatch();
    const history=useHistory();
    const {name,email,phone,id}=user
    return(
        <tr >
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
               <button onClick={()=>dispatch(deleteUser(id))}>delete</button>
               <button onClick={()=>history.push(`user/${id}`)}>Edit</button>
            </td>
        </tr>
    )
}
export default List;