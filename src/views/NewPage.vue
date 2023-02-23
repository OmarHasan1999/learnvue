<template lang="html">
    <div>
           <h1 class="head">Header</h1>
           
           <slot></slot>

           <h1 class="end">Footer</h1>  
           <p>&copy;Maestro</p>
              
    </div>
</template>
<script lang="js">
export default {
    
    
}
</script>
<style lang="css">
   .head , .end {
         background-color: black;
         color: white;
         padding: 20px;
   }
    
</style>