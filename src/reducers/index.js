import { combineReducers } from "redux";

import tweetsReducer from "./tweetsReducer";
import userReducer from "./userReducer";
import { reducer as formReducer } from "redux-form";

const reducers = {
    tweets: tweetsReducer,
    user: userReducer,
    form: formReducer
};

export default combineReducers(reducers);
