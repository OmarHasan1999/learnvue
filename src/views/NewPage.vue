<template lang="html">
    <div>
           <p class="head">Header</p>
           <slot></slot>
           <p class="end">Footer</p>  
           <slot name="afterFooter"></slot>
              
    </div>
</template>
<script lang="js">
export default {
    name:"NewPageVue"
    
}
</script>
<style lang="css">
   .head , .end {
         background-color: black;
         color: white;
         padding: 25px;
   }
    
</style>