/*
 * @Author: sungen
 * @since: 2024-04-22 12:11:23
 * @desc: 
 * @LastEditTime: 2024-04-22 12:12:33
 * @LastEditors: sungen
 */
import reducer from './Reducer'
import { createStore, } from 'redux'
const initValue = {
    'First': 0,
    'Second': 10,
    'Third': 20
}
const store = createStore(reducer, initValue)
export default store;