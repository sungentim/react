/*
 * @Author: sungen
 * @since: 2024-04-22 12:09:06
 * @desc: 
 * @LastEditTime: 2024-04-22 12:11:03
 * @LastEditors: sungen
 */

import * as ActionTypes from './ActionType.js'
// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action)=>{
    const {counterCaption} = action;
    
    switch(action.type){
        case ActionTypes.INCREMENT:
                
            return {
                ...state,
                [counterCaption]:state[counterCaption]+1
            }
        case ActionTypes.DECREMENT:
            return {
                ...state,
                [counterCaption]:state[counterCaption]-1
            }
        default:
            return state;
    }
}