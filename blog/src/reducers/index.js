import { combineReducers } from 'redux';
import PostsReduces from './reduces_posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    posts: PostsReduces,
    form: formReducer
});

export default rootReducer;
