import React, {useContext} from 'react';
import { ColorContext, UPDATE_COLOR } from './Colors'

function Buttons() {
    const {dispatch} = useContext(ColorContext)
    return (
        <div>
            <button onClick={() => {dispatch({type: UPDATE_COLOR, color: 'red'})}}>Red</button>
            <button onClick={() => {dispatch({type: UPDATE_COLOR, color: 'yellow'})}}>Yellow</button>
        </div>
    )
}

export default Buttons