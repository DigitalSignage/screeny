/** Common Library **/

// <reference path="../app/typings/redux-thunk.d.ts" />

declare var thunkMiddleware: any;


import {Injectable} from "@angular/core";
import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from "redux";

import thunkMiddleware from "redux-thunk";
import {AppStore} from "angular2-redux-util";
// import {List, Map} from "immutable";
// import {PrivelegesModel} from "./reseller/PrivelegesModel";
// import * as _ from "lodash";
// import * as xml2js from "xml2js";
// import * as moment_ from "moment";

//import {LoggerMiddleware} from "angular2-redux-util";
//import {BusinessUser} from "./business/BusinessUser";
//import * as thunkMiddleware from 'redux-thunk';

// export const moment = moment_["default"];

@Injectable()
export class Lib {

    static StoreFactory(reducerList: Object) {
        return () => {

            const reducers = combineReducers({reducerList});
            // const middlewareEnhancer = applyMiddleware(<any>thunkMiddleware);
            // const enhancers = compose(middlewareEnhancer);
            // const createStoreWithEnhancers = enhancers(createStore);
            // const reduxAppStore = createStoreWithEnhancers(reducerList);
            // return new AppStore(reduxAppStore);


            return new AppStore(reducerList);
        };
    }
}

