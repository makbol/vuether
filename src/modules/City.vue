<template>
  <div>
    <button @click="getWeather">{{ name }}</button>
  </div>
</template>
<style></style>
<script>
  import api from '../helpers/api';
  export default {
    props: ['name', 'zip'],
    methods: {
      getWeather() {
        api.getWeatherByZipcode(this.zip).then(console.log)
      }
    }
  }
</script>
