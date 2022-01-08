const initialValue = {
    users: [],
    getUsers: [],
    currentUsers:{}
};

const userReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "ADD_USER":
            console.log(state,'===', action)
            return {
                ...state,
                 users: [...state.users, action.payload]
            }
            case "DELETE_USER":
                console.log('delete','===', action)
                return {
                    ...state,
                     users:state.users.filter((user)=>user.id !== action.payload)
                }
                case "GET_USER":
                console.log('get','===', action)
                return {
                    ...state,
                    currentUsers :state.users.find((user)=>user.id === action.payload)
                }
                case "UPDATE_USER":{
                console.log('update','===', action)
                return {
                    ...state,
                     users:state.users.map((user)=>user.id === action.payload.id ? action.payload:user),
                    currentUsers:{}
                }
            }

        default:
            return { ...state }
    }
}

export default userReducer;