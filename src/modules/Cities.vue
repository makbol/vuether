<template>
  <div>
    <city v-for="city in cities" :data="city" ></city>
  </div>
</template>
<style></style>
<script>

  import City from './City.vue';
  import store from '../helpers/store';

  export default{
    components: {City},
    data(){
      return {
        cities: store.data.cities
      }
    }
  }
</script>
