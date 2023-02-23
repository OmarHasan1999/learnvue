<template lang="html">
  
  
  <PageNotFound title="lesson 4/31"/>
  <CardMyPage title="paragraph 1" description="Vue.js (pronounced /vjuː/, like view) is a 
              library for building interactive web interfaces."/>
  <!--  <CardMyPage title="paragraph 2" description="The goal of Vue.js
         is to provide the benefits of reactive data binding and composable
         view components with an API that is as simple as possible."/>
  <CardMyPage title="paragraph 3" description="Read a travel guide about Bangkok to 
  practise and improve your reading skills."/>
  <CardMyPage title="paragraph 4" description="Read an email asking for help from 
  another department to practise and improve your reading skills."/>  -->
  
  
  <NewPageVue>

    <CardMyPage title="paragraph 2" description="The goal of Vue.js
         is to provide the benefits of reactive data binding and composable
         view components with an API that is as simple as possible."/>
     
    
  </NewPageVue>
 
   
</template>
  
  <script>
  import CardMyPage from './views/CardMyPage.vue';
  import PageNotFound from './views/PageNotFound.vue';
  import NewPageVue from './views/NewPage.vue';



  export default {
    name: 'App',
    components : {
    PageNotFound,
    CardMyPage,
    NewPageVue
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
  