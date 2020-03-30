import React, { useContext } from 'react';
import {ColorContext} from './Colors'

function ShowArea() {
    const {color} = useContext(ColorContext)
    return (
        <div style={{color: color}}>
            现在是blue, 憨憨
        </div>
    )
}

export default ShowArea