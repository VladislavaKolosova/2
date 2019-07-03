<template>
  <div>
    <my-header>
      <h1>routing</h1>
    </my-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import myHeader from './Header.vue'

export default {
  data(){
    return {
      secondPart: 'SecondPart',
      mode: 'view'
    }
  },
  computed: {
    componentName(){
      return this.mode == 'view' ? 'ProductDetails' : 'ProductAdd';
    }
  },
  components: {
    myHeader
  }
}
</script>


<style scoped>
  .container{
    display: flex;
    align-items: flex-start;
  }
    H2{
      color: red;
    }
</style>
