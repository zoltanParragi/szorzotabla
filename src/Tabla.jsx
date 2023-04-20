import React from 'react'
import { action } from 'mobx'
import store from './store'

export default function Tabla() {
    const tablaTombVegso = () => {
        let tablaTomb = []
        for (let i = 1; i <= 10; i++) {
            for (let j = 1; j <= 10; j++) {
                tablaTomb.push(i * j)
            }
        }
        return tablaTomb
    }

    const setNumberToShow = action((num) => {
        store.numberToShow = num
    })

    return tablaTombVegso().map((e, i) => {
        return <span key={i} className='tablaElem' onClick={(e) => setNumberToShow(e.target.innerText)}>{e}</span>
    })
}
