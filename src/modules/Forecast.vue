<template>
  <div class="site-wrap">
    <header class="header">{{ forecast.selection.displayName }}</header>
    <div class="current" v-if="forecast.currently">
      <div class="left">
        <img class="icon" :src="getIcon" />
      </div>
      <div class="right">
        <div class="current-temp">{{ currentTemp }} &#8451;</div>
        <div class="current-summary">{{ forecast.currently.summary }}</div>
      </div>
    </div>
    <div class="hourly" v-if="forecast.hourly">
      <hourly-forecast v-for="item in forecast.hourly.data" :data="item"></hourly-forecast>
    </div>
    <div class="daily" v-if="forecast.daily">
      <daily-forecast v-for="item in forecast.daily.data" :data="item"></daily-forecast>
    </div>
  </div>

</template>
<style>
  .header {
    padding-top: 18px;
    text-align: center;
  }
  .current {
    margin-top: 50px;
    text-align: center;
  }
  .holder {
    display: flex;
  }
  .current .icon {
    width: 141px;
  }
  .current-temp {
    font-size: 36px;
    margin-top: 20px;
  }
  .current-summary {
    margin-top: 10px;
    font-size: 16px;
  }
  .hourly {
    display: flex;
    overflow: scroll;
    margin: 30px 20px;
    background: rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.6);
    padding: 10px;
  }
  .daily {
    margin-top: 20px;
    padding: 0 20px;
    background: radial-gradient(ellipse at center, #22283d 0%,#16222c 100%);
    position: relative;
  }
  .daily:before {
    content: "";
    display: block;
    height: 100%;
    width: 2px;
    background: rgba(255, 255, 255, 0.2);
    position: absolute;
    left: 86px;
    top: 0;
  }
</style>
<script>
  import DailyForecast from './DailyForecast.vue';
  import HourlyForecast from './HourlyForecast.vue';
  import store from '../helpers/store';
  export default {
    data() {
      return {
        forecast: store.data
      }
    },
    computed: {
      currentTemp() {
        return Math.round(this.forecast.currently.temperature);
      },
      getIcon() {
        return `./src/assets/images/${this.forecast.currently.icon}.png`;
      }
    },
    components: { DailyForecast, HourlyForecast }
  }
</script>
