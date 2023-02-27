<template lang="html">
    <div>
        <p>{{ title }}</p>
    </div>  
</template>
<script>
export default {
    data(){
       return{
          title:"Component 2"
       }
    }
}
</script>
<style scoped>
    p {font-size:30px;}
</style>