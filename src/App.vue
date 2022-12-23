<template lang="html">
  
  
  <PageNotFound :title="title"/>
  <CardMyPage title="paragraph 1" description="Read the programme for a management 
  conference to practise and improve your reading skills."/>
  <!--  <CardMyPage title="paragraph 2" description="Read a flyer promoting a new gym to
   practise and improve your reading skills."/>
  <CardMyPage title="paragraph 3" description="Read a travel guide about Bangkok to 
  practise and improve your reading skills."/>
  <CardMyPage title="paragraph 4" description="Read an email asking for help from 
  another department to practise and improve your reading skills."/>  -->
  <NewPageVue>

    <CardMyPage title="paragraph 2" description="Read the programme for a management 
     conference to practise and improve your reading skills."/>
     <template v-slot:afterFooter>
       <p>&copy; Hero</p>
     </template>
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
},
     data() {
      return{
        title:"Lesson Number 4"
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
  