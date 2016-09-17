<template>
  <menu></menu>
  <forecast></forecast>
</template>

<script>
  import api from './helpers/api';
  import store from './helpers/store';
  import Menu from './modules/Menu.vue';
  import Forecast from './modules/Forecast.vue';

  export default {
    components: {Menu, Forecast},
    init() {
      store.data.selection = store.data.cities[0];
      return api.getWeatherByZipcode(store.data.cities[0].zip).then(result => {
        store.updateWeather(result.body);
      })
    }
  }
</script>

<style>
  /* Micro reset */
  *,*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;}

  html, body {
    height: 100%;
    width: 100%;
  }
  body {
    overflow-x: hidden;
    color: #fff;
    font-family: Futura,"Trebuchet MS",Arial,sans-serif;
  }

  /* Site Wrapper - Everything that isn't navigation */
  .site-wrap {
    /* Critical position and size styles */
    min-height: 100%;
    min-width: 100%;
    background-color: #00e1ff;
    position: relative;
    top: 0;
    bottom: 100%;
    left: 0;
    z-index: 1;
  }

</style>
