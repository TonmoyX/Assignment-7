'use client'
import React, { createContext, useState } from 'react';

export const UserContext = createContext();


const UserContextProvider = ({ children }) => {

    const [fndData, setFndData] = useState([]);
    const [fndDataText, setFndDataText] = useState([]);
    const [fndDataVdo, setFndDataVdo] = useState([]);
    const data = {
        fndData, setFndData, fndDataText, setFndDataText, fndDataVdo, setFndDataVdo
    }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;