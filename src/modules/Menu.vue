<template>
  <ul class="navigation">
    <cities></cities>
  </ul>
  <input type="checkbox" id="nav-trigger" class="nav-trigger" />
  <label for="nav-trigger">
    <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' width='30px' height='30px' viewBox='0 0 30 30' enable-background='new 0 0 30 30' xml:space='preserve'>
      <rect width='30' height='6'/>
      <rect y='24' width='30' height='6'/>
      <rect y='12' width='30' height='6'/>
    </svg>
  </label>
</template>
<style>
  .navigation {
    /* critical sizing and position styles */
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;

    /* non-critical appearance styles */
    list-style: none;
    background: #fff;
  }

  /* Navigation Menu - List items */
  .nav-item {
    /* non-critical appearance styles */
    width: 200px;
  }

  /* Nav Trigger */
  .nav-trigger {
    /* critical styles - hide the checkbox input */
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }

  label[for="nav-trigger"] {
    /* critical positioning styles */
    position: fixed;
    left: 15px; top: 15px;
    z-index: 2;

    /* non-critical apperance styles */
    height: 30px;
    width: 30px;
    cursor: pointer;
    background-size: contain;
    fill: #fff;
  }

  /* Make the Magic Happen */
  .nav-trigger + label, .site-wrap {
    transition: transform 250ms ease;
  }

  .nav-trigger:checked + label {
    /*left: 215px;*/
    transform: translateX(215px) scale(1);
  }

  .nav-trigger:checked ~ .site-wrap {
    transform: translateX(200px) scale(1);
    box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.15);
  }



</style>
<script>
  import Cities from './Cities.vue';
  export default {
    components: { Cities }
  }
</script>
