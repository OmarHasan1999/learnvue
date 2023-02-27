<template lang="html">
  <div>
     <PageNotFound>
     <NewPage/>
     <CardMyPage/>
     </PageNotFound>
  </div>
   
</template>
  
<script>
 import PageNotFound from './views/PageNotFound.vue';
 import CardMyPage from './views/CardMyPage.vue';
 import NewPage from './views/NewPage.vue';
 
  export default {
    name: 'App',
    components : {
      PageNotFound,
      CardMyPage,
      NewPage
    },
data(){
  return{
      key : true,
      Name : ""
  }
}

}  
    
</script>
  
  <style lang="css">
  #app {  font-family: Arial, Helvetica, sans-serif;
          -webkit-font-smooting: antialisd;
          -moz-osx-font-smoothing : grayscale;
          margin-top : 60px;
          text-align : center;
  }
      
  
  </style>
  