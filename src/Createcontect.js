import React, { createContext, useContext, useState } from 'react'
import Error from './Error'
const Data = createContext()


const Createcontect = ({ children }) => {

    const logacc = [
        {
            email: 'sajin@amail.com',
            password: "sajin1Ss"
        },
        {
            email: "jack@amail.com",
            password: "jack1Js"
        },
        {
            email: "jhon@amail.com",
            password: "jhon1Js"
        }
    ]


    const [errors, setErrors] = useState({});
    const [mail, setMail] = useState("");
    const [pin, setPin] = useState("");

    function handlevalidation(event) {
        event.preventDefault()
        let values = {
            mail,
            pin
        }
        setErrors(Error(values));
    }
    return (
        <Data.Provider value={{ setMail, setPin, errors, handlevalidation, logacc, pin, mail }}>{children}</Data.Provider>
    )
}

const useData = () => {
    const file = useContext(Data)
    return file;
}

export { Createcontect, useData };