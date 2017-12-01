import {combineReducers} from 'redux';
import {LOAD_ALL_CATEGORIES} from "../actions/index";

const initialState = {
    categories: [{
        name: 'All',
        path: 'all'
    }],
    posts: ['post']
}

function category(state = initialState, action) {

    switch (action.type) {
        case LOAD_ALL_CATEGORIES :
            var items = state.categories;
            action.categories.map((t) => items.push(t))
            return {
                ...state,
                categories: items
            }
        default:
            return state
    }
}

function post(state = {}, action) {
    switch (action.type) {
        default:
            return state;
    }
}


function comment(state = {}, action) {
    switch (action.type) {
        case 'LOAD_ALL_CATEGORIES':
            return state;
        default:
            return state;
    }
}

export default combineReducers({
    category,
    post,
    comment
})


