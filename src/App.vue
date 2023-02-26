<template lang="html">
  
  <p>{{ key ? "Hello" : "where you" }}</p>
  <button @click="changeSwitch">{{ key ? "Hello!" : "I am here" }}</button>
 
 <div>
  <h3>{{ Name }}</h3>
  <input type="text" @keyup="logToConsole" ref="form"><br><br>
  <button @click="handleRef">click here</button>
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
  },
  handleRef(){
    if( this.$refs.form.classList.contains("custom_style") )  {
        this.$refs.form.classList.remove("custom_style") 
        this.$refs.form.focus()  }
    else{ this.$refs.form.classList.add("custom_style") }
         
  
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
  input.custom_style{padding:6px;}      
  
  </style>
  