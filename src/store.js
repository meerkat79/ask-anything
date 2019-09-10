import { createStore } from "redux";
import reducers from "./reducers";

const preloadState = {
    forms: []
}

export default createStore(reducers, preloadState);
