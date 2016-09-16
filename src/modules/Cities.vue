<template>
  <div>
    <city v-for="city in cities" :name="city.displayName" :zip="city.zip"></city>
  </div>
</template>
<style></style>
<script>
  import City from './City.vue'
  export default{
    components: {City},
    data(){
      return {
        cities: [
          {
            displayName: 'San Francisco, CA',
            zip:         94102
          },
          {
            displayName: 'Portland, OR',
            zip:         97232
          },
          {
            displayName: 'Phoenix, AZ',
            zip:         85338
          },
        ]
      }
    }
  }
</script>
