import React from 'react'
import { observer } from 'mobx-react-lite'
import store from './store'

function Display() {
    return (
        <div>
            <h3>Display</h3>
            <div>{store.numberToShow}</div>
        </div>
    )
}

export default observer(Display)
