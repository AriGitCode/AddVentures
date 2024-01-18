
const reducer =(state, action)=>{
    switch(action.type){
        case 'UPDATE_USER':

                return{...state, currentUser:action.peyload}

        default:
            throw new Error ('No matched action!')
    }
}

export default reducer