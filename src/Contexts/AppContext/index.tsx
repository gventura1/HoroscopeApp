import React, { createContext, useState } from "react";
import * as send from '../../Services/getHoroscope'

interface signs {
    title: string
    description: string
    sign: string
}
interface horoscopes {
    horoscopes: signs[]
    dt: string
}

interface AppContextData {
    data: horoscopes | null
    sucess: boolean
    getSign: () => void
}

const HoroscopeContext = createContext<AppContextData>({} as AppContextData)

export const HoroscopeProvider: React.FC = ({ children }) => {

    const [signs, setSigns] = useState<horoscopes | null>(null)


    async function getSign() {
        const response = await send.getHoroscope()
        if (response.data.result != []) {
            setSigns(response.data.result[0])

        }
    }
    console.log(signs)


    return (
        <HoroscopeContext.Provider value={{ getSign, data: signs, sucess: !!signs }}>
            {children}
        </HoroscopeContext.Provider>
    )


}

export default HoroscopeContext