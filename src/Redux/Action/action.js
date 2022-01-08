// create data
export const userRegister=(data)=>{
    return{
        type:'ADD_USER',
        payload:data
    }
}
// Delete data
 export const deleteUser=(id)=>{
    return{
        type:'DELETE_USER',
        payload:id
    }
}
// reduse data
export const getUser =(id)=>{
    return{
        type:'GET_USER',
        payload:id
    }
}
// update data
export const updateUser=(data)=>{
    return{
        type:'UPDATE_USER',
        payload:data
    }
}