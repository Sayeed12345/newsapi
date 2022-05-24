import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState([]);
    const apiKey = "badjbviuah298yr8yei038yesq99";
    useEffect(() => {
        axios.get(
            'http://newsapi.org/v2/everything?q=rich&from=2020-07-19=${apiKey}'
        ).then((response) => setData(response.data)).catch((error) => console.log(error))
    }, [data]);
    return (
        <NewsContext.Provider value={{ data }}>{props.children}</NewsContext.Provider>

    );
};
