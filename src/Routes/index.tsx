import React, { useContext } from 'react'
import HoroscopeContext from '../Contexts/AppContext'
import { PreGetRoutes } from './preGet.routes'
import { AfterGetRoutes } from './afterGet.routes'

export function Routes() {

    const { sucess } = useContext(HoroscopeContext)

    if (!sucess)
        return <PreGetRoutes />
    else
        return <AfterGetRoutes />
}