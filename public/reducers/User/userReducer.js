import states from '../../actions/User/userStates';

const user = (state = {}, action) => {
    switch (action.type) {
        case states.RECEIVE.USER:
            return action.user;
        case states.RECEIVE.LOGIN:
            return action.user;
        case states.RECEIVE.CREATE_USER:
            return action.user;
        default:
            return state;
    }
};

export default user;