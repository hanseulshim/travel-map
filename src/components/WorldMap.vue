<template>
  <div class="map-container" ref="chartDiv">
  </div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodataWorldLow from '@amcharts/amcharts4-geodata/worldLow';

export default {
  name: 'WorldMap',
  mounted() {
    const chart = am4core.create(this.$refs.chartDiv, am4maps.MapChart);
    chart.geodata = am4geodataWorldLow;
    chart.projection = new am4maps.projections.Miller();
    chart.seriesContainer.draggable = false;
    chart.maxZoomLevel = 1;
    const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.exclude = ['AQ'];
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.fill = '#ACB7C7';
  },
};
</script>

<style lang="scss">
.map-container {
  width: 100%;
  height: 1000px;
}
</style>
