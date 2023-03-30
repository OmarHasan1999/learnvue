<template lang="html">
  <div>
    <HeaderPage/>
    <slot></slot>
    <FooterPage/>
  </div>
</template>
<script lang="js">
import HeaderPage from './HeaderPage.vue';
import FooterPage from './FooterPage.vue';





export default {
    components: { HeaderPage,FooterPage },
    
   
}




</script>
<style lang="css">
  @import '../css/app.css';
</style>
