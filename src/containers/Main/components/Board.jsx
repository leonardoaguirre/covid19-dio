import React from "react";
import { PropTypes } from "../../../../node_modules/@material-ui/core/index";
import {Grid, Skeleton,Card} from '../../../components/index'

function Board({data}) {
    const {cases, todayDeaths, recovered, deaths, todayCases} = {data}

    const getValue = (value) = value? value : <Skeleton variant="text" width={132} height={60}/>
    return(
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={getByDisplayValue(cases)} label="Total de casos" color="#5d78ff"></Card>
                </Grid>
        </Grid>
    )
}