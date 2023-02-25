<template lang="html">
  
  <p>{{ key ? "Hello" : "where you" }}</p>
  <button @click="changeSwitch">{{ key ? "Hello!" : "I am here" }}</button>
 
 <div>
  <h3>{{ Name }}</h3>
  <input type="text" @keyup="logToConsole">
 </div>
   
</template>
  
  <script>
 



  export default {
    name: 'App',
    components : {
    
    
},
data(){
  return{
      key : true,
      Name : ""
  }
},
methods:{
  changeSwitch(){
     this.key = !this.key
  //'this' inside methods points to the current active instance
  },
  logToConsole(c){
     this.Name = c.target.value
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
  