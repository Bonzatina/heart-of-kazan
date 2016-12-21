

const initialState = {
    test: 'Привет!'
};

export default function gameState(state = initialState, action) {
    switch (action.type) {
        case 'TEST':
            return { ...state, test: action.test};

        default:
            return state;
    }
}
