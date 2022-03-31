import api from "api";
import React, { memo, useEffect, useState } from "react";
import { ContainerStyled } from "./style";

function Main() {
    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')

    const getCovidData = (country) => {
        api.getCountry(country).then(data => setData(data))
    }

    useEffect(() => {
        getCovidData(country)
    }, [country])

    return (
        <ContainerStyled>
            <div className="mb-2">

            </div>
        </ContainerStyled>
    )
}

export default memo(Main)