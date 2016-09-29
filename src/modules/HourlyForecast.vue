<template>
  <div class="hourly-forecast-item">
    <div class="time">{{ date }}</div>
    <div class="symbol">
      <img class="icon" :src.once=icon />
    </div>
    <div class="temp">{{ data.temperature | round }} &#8451;</div>
  </div>
</template>
<style>
  .hourly-forecast-item {
    font-family: "Gill Sans","Gill Sans MT",Calibri,sans-serif;
    font-size: 14px;
    text-align: center;
    width: 45px;
    flex-shrink: 0;
    margin-right: 10px;
  }
  .hourly-forecast-item .symbol {
    height: 36px;
    margin: 5px 0;
  }
  .hourly-forecast-item .icon {
    width: 33px;
  }

  @media screen and (min-width: 600px) {
    .hourly-forecast-item {
      margin-bottom: 10px;
    }
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
        return moment.unix(this.data.time).format('h A');
      },
      icon() {
        return `./src/assets/images/${this.data.icon}.svg`;
      }
    }
  }
</script>
