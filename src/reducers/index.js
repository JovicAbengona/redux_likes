import { combineReducers } from 'redux';

const reactsReducer = (reactDetails = { likes: 0, dislikes: 0 }, action) => {
    if (action.type === 'LIKE_SELECTED')
        reactDetails.likes += 1
    else if (action.type === 'DISLIKE_SELECTED')
        reactDetails.dislikes += 1

    return { likes: reactDetails.likes, dislikes: reactDetails.dislikes }
};

export default combineReducers({
    reacts: reactsReducer
});