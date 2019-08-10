import {ADD_ARTICLE} from "../constants/action-types";

const initialState ={
    articles: []
};

function rootReducer(state = initialState, action){
    if(action.type === ADD_ARTICLE){
        //This breaks the main principle of redux, state is immutable
        //state.articles.push(action.payload);

        //This is the redux way to return state
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }

    return state;
}

export default rootReducer;