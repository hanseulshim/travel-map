<template>
  <div class="chart-container" ref="chartDiv" />
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import donutData from '../data/donutData';

export default {
  name: 'donut',
  mounted() {
    const chart = am4core.create(this.$refs.chartDiv, am4charts.PieChart);
    chart.data = donutData;

    const pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'litres';
    pieSeries.dataFields.category = 'country';
  },
};
</script>
