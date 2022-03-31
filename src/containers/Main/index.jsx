import api from "api";
import React, { memo, useEffect, useState } from "react";
import Board from "./components/Board";
import Panel from "./components/Panel";
import { ContainerStyled } from "./style";

function Main() {
    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')
    const updatedAt = new Date().toLocaleDateString()

    const getCovidData = (country) => {
        api.getCountry(country).then(data => setData(data))
    }

    useEffect(() => {
        getCovidData(country)
    }, [country])

    const handleChange = ({ target }) => {
        const country = target.value
        setCountry(country)
    }

    return (
        <ContainerStyled>
            <div className="mb-2">
                <Panel
                    data={data}
                    updateAt={updatedAt}
                    onChange={handleChange}
                    country={country}
                    getCovidData={getCovidData} />
            </div>
            <Board data={data} />
        </ContainerStyled>
    )
}

export default memo(Main)