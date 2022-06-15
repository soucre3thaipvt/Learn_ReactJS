import Context from "./Context";
import { useReducer } from "react";
import React from 'react'
import reducer, { initState } from "./reducer";
import logger from "./logger";
export default function Provider({ children }: any) {
    const [state, dispatch] = useReducer(logger(reducer), initState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}
