const initialState = {name:'', id: '' }

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'login':             // Allows to update redux when user logs in
            return { 
                    ...state, 
                    name: action.payload.name, 
                    id: action.payload.id 
                };
        case 'logout':          // Allows to update redux when user logs out
            return { 
                ...state, 
                name: '', 
                id: ''
            };
        default: 
            return state
    }
}
export default reducer

// Notes //
// When interact with redux, this is the function (reducer) that it works with. 
// Thre are 2 values are being worked with (state & action)
// State is the current state of redux
// action is the .....