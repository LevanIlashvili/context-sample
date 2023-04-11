import { createContext, useState } from "react";

export const valueContext = createContext(null);

export const ValueProvider = ({ children }) => {
    const [value, setValue] = useState('');

    const contextValue = {
        value,
        setValue,
    }
    
    return (
        <valueContext.Provider value={contextValue}>
            {children}
        </valueContext.Provider>
    )
}