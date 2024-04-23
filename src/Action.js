/*
 * @Author: sungen
 * @since: 2024-04-22 12:06:05
 * @LastEditTime: 2024-04-22 12:08:44
 * @LastEditors: sungen
 */
import * as ActionTypes from './ActionType.js'
export const increment = (counterCaption) => ({
    type:ActionTypes.INCREMENT,
    CounterCatption:counterCaption
})

export const decrement = (counterCaption) => ({
    type:ActionTypes.DECREMENT,
    CounterCatption:counterCaption
})

