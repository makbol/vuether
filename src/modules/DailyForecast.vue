<template>
  <div class="daily-forecast-item">
    <div class="date">{{ date }}</div>
    <div class="icon">
      <img class="icon" :src.once=icon />
    </div>
    <div class="details">
      <div class="temp"><em class="temp-min">{{ data.temperatureMin | round }}&#8451;</em> {{ data.temperatureMax | round }} &#8451;</div>
      <div class="summary">{{ data.summary }}</div>
    </div>
  </div>

</template>
<style>

  .daily-forecast-item {
    font-family: "Gill Sans","Gill Sans MT",Calibri,sans-serif;
    display: flex;
    align-items: flex-start;
    padding: 15px 0;
  }

  .daily-forecast-item .date {
    font-size: 24px;
    font-weight: 100;
    width: 50px;
    flex-shrink: 0;
  }

  .daily-forecast-item .icon {
    width: 33px;
    position: relative;
    z-index: 2;
  }

  .daily-forecast-item .details {
    margin-left: 20px;
  }

  .daily-forecast-item .temp {
    font-size: 24px;
    font-weight: 100;
  }

  .daily-forecast-item .temp-min {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.3);
    margin-right: 5px;
  }

  .daily-forecast-item .summary {
    font-size: 14px;
    font-weight: 100;
  }





</style>
<script>
  import moment from 'moment';
  export default {
    props: ['data'],
    filters: {
      round(value) {
        return Math.round(value);
      }
    },
    computed: {
      date() {
        return moment.unix(this.data.time).format('dd');
      },
      temp() {
        return Math.round(this.data.temperatureMax);
      },
      icon() {
        return `./src/assets/images/${this.data.icon}.png`;
      }
    }
  }
</script>
