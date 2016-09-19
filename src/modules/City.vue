<template>
  <li class="nav-item">
    <button class="city" @click="getWeather">{{ data.displayName }}</button>
  </li>
</template>
<style>
  .nav-item {
  }
  .city {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 18px;
    font-family: Futura,"Trebuchet MS",Arial,sans-serif;
    text-align: left;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>
<script>
  import api from '../helpers/api';
  import store from '../helpers/store';
  export default {
    props: ['data'],
    methods: {
      getWeather() {
        api.getWeatherByZipcode(this.data.zip).then(result => {
          store.data.selection = this.data;
          store.updateWeather(result.body);
        })
      }
    }
  }
</script>
