/*
 * @Author: sungen
 * @since: 2024-04-23 11:46:36
 * @desc: 
 * @LastEditTime: 2024-04-23 16:15:44
 * @LastEditors: sungen
 */
import { useContext } from 'react';
import {LevelContext} from './LevelContext.js'

export default function Section({children }) {

    const level = useContext(LevelContext);
    return (
        <section className="section">
            <LevelContext.Provider value={ level + 1 }>
                {children}
            </LevelContext.Provider>
        </section>
    )
    
}