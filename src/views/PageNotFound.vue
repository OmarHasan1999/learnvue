<template lang="html">
  <div>
    <p>{{ title }}</p>
    <slot></slot>
  </div>
</template>
<script lang="js">
export default {
  data(){
     return{
         title:"This is Parent Component"
     }
  }
}
</script>
<style lang="css">
  
</style>
