import React, { memo } from "react";
import refreshIcon from '../../../assets/images/refresh.svg'
import { Card, Button, Typography, Select, MenuItem } from '../../../components/index'
import { CardPanelContentStyled, ItemStyled } from "./style"
import COUNTRIES from '../../../commons/constants/countries'

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCovidData }) {
    const { recovered } = data

    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`Pais-${country.label}`} />
            </ItemStyled>
        </MenuItem>
    )

    const textCovid19 = `País: ${country} - recuperados: ${recovered}`

    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19)
    }

    const shareInfo = () => {
        navigator.share({
            title: `Dados do Covid19 - ${country}`,
            text: textCovid19,
            url: 'https://covid19dio.netlify.app/'
        })
    }
    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )

    const renderCopyButton = (
        <div>
            <Button variant="contained" color="primary" onClick={copyInfo}>
                Copiar
            </Button>
        </div>
    )

    return (
        <Card>
            <CardPanelContentStyled>
                    <Typography variant="h5" component="span" color="primary">
                        COVID19
                    </Typography>
                    <Typography variant="h6" component="span" color="primary">
                        Painel Coronavirus
                    </Typography>
                    <Typography variant="body2" component="span" color="primary">
                        Atualizado em: {updateAt}
                    </Typography>
                    <div className="pt-2">
                        <Select onChange={onChange} value={country} defaultValue={country}>
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                    </div>
                {navigatorHasShare ? renderShareButton : renderCopyButton}
            </CardPanelContentStyled>
        </Card>
    )
}

export default memo(Panel)