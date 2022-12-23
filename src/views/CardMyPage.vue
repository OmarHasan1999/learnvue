<template lang="html">
    <div class="code">
        <div>
            <h1>{{ title }}</h1>
            <div>
                <p>{{ description }} </p>

            </div>
        </div>
        
    </div>
</template>
<script lang="js">
export default {
   
    props:["title","description"]
    
}
</script>
<style lang="css">
.code  {
          max-width: 400px;
          margin: 25px auto;
          border: 2px solid #ccc;
          border-radius: 5px;
          padding: 30px;

}
  
    
</style>