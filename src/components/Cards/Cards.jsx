import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if (!confirmed) {
        return 'Processando...';
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom><strong>Confirmados</strong></Typography>
                        <Typography varaint="h4">
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2"><i>Número comulativo de infectados por Covid-19</i></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                        <Typography color="textSecondary" gutterBottom><strong>Recuperados</strong></Typography>
                        <CountUp 
                        start={0} end={recovered.value} duration={2.5} separator=","
                    />
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2"><i>Numero comulativo de recuperados do Covid-19</i></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom><strong>Mortos</strong></Typography>
                        <CountUp 
                        start={0} end={deaths.value} duration={2.5} separator=","
                    />
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2"><i>Numero comulativo de mortes pelo Covid-19</i></Typography>
                    </CardContent>
                </Grid>
            </Grid>
            
        </div>
    );
};

export default Cards;