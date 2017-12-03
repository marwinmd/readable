import {combineReducers} from 'redux';
import {LOAD_ALL_CATEGORIES, LOAD_ALL_POSTS, LOAD_POSTS_FOR_CATEGORY} from "../actions/index";

const initialStateForCateories = {
    categories: [],
}

const initialStateForPosts = {
    posts: []
}
function categoryReducer(state = initialStateForCateories, action) {
    switch (action.type) {
        case LOAD_ALL_CATEGORIES :
            return {
                categories: action.categories
            };

        default:
            return state
    }
}

function postReducer(state = initialStateForPosts, action) {
    switch (action.type) {
        case LOAD_ALL_POSTS :
            return {
                posts: action.posts
            };
        case LOAD_POSTS_FOR_CATEGORY :


        default:
            return state;
    }
}


function commentReducer(state = {}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    categoryReducer,
    postReducer,
    commentReducer
})


