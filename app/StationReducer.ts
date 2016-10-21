import {List, Map} from 'immutable';
// import * as _ from 'lodash'

export function stations(state:Map<string,any> = Map<string,any>(), action:any):Map<string, List<any>> {

    switch (action.type) {
        case 'RECEIVE_STATIONS':{
            return state.set('2',Math.random());
        }
            

        default:
            return state;
    }
}
