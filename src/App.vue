<template>
<v-app>
  <div>
    <v-btn color="success" :flat="view === 'donut'" @click="setMapview">World Map</v-btn>
    <v-btn color="info" :flat="view === 'map'" @click="setDonutView">Donut</v-btn>
    <Donut v-if="view === 'donut'" />
    <WorldMap v-if="view === 'map'" />
  </div>
</v-app>
</template>

<script>
import Donut from './components/Donut.vue';
import WorldMap from './components/WorldMap.vue';

export default {
  name: 'app',
  components: {
    Donut,
    WorldMap,
  },
  data() {
    return {
      view: 'map',
    };
  },
  methods: {
    setDonutView() {
      this.view = 'donut';
    },
    setMapview() {
      this.view = 'map';
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 25px;
}
</style>
