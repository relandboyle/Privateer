import { Grid, Container } from '@mui/material';
import React from 'react';
import MetricCards from '../components/monitor/MetricCards';
import MetricTable from '../components/monitor/MetricTable';
// temporary mockup images
import bars from '../assets/mockups/bars.png';
import timeSeries from '../assets/mockups/timeSeries.png';
import resources from '../assets/mockups/resources.png';
import gauges from '../assets/mockups/gauges.png';
import monitorData from '../assets/mockups/monitorData';

const Monitor = () => {
  return (
    <Container
      maxWidth="false"
      title="monitor-container"
      sx={{ marginTop: '1em' }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} lg={4}>
          <MetricCards content={bars} text="Bar Graphs" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <MetricCards content={timeSeries} text="Time Series" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <MetricCards content={resources} text="Resources" />
        </Grid>
        <Grid item xs={12}>
          <MetricCards content={gauges} text="Gauges" />
        </Grid>
        <Grid item xs={12}>
          <MetricTable data={monitorData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Monitor;
