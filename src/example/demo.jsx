import React from 'react';
import ShowArea from './showArea';
import Buttons from './Buttons';
import { Color } from './Colors'

function Demo() {
    return (
        <div>
            <Color>
                <Buttons />
                <ShowArea />
            </Color>
        </div>
    )
}
export default Demo