import { combineReducers } from 'redux';
import gamesReducer from './gameReducer';
import detaileReducer from './detailReducer';

const rootReducer = combineReducers({
    games: gamesReducer,
    detail: detaileReducer, 
});
export default rootReducer;