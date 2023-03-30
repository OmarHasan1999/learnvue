<template lang="html">
  
    <PageNotFound>
    <div class="star">

        <form class="rout" @submit.prevent="handle">
        <div>
          <h3 class="heading">Anime Registration Form</h3>
        </div>
        <div>
          <label for="" class="user">USERNAME :</label>
          <input type="text" class="pass" v-model="username">
        </div>
        <div>
          <label for="" class="user">PASSWORD :</label>
          <input type="password" class="pass" v-model="password">
        </div>

        <div>
          <label for="" class="user">FAVORITE ANIME</label>
          <select name="" id="" class="select" v-model="favoranime">
            <option value="dragon ball">dragon ball</option>
            <option value="naroto">naroto</option>
            <option value="one piece">one piece</option>
          </select>
        </div>
        
        <div>
          <label for="">Favorite Power Systems :</label><br><br>
          <div class="here">
            <div>
              <input type="checkbox" name="wolf" id="wolf" value="wolf" v-model="powersystem">
              <label for="wolf">wolf</label>
             </div>
             <div>
              <input type="checkbox" name="fruit" id="fruit" value="fruit" v-model="powersystem">
              <label for="fruit">fruit</label>
             </div>
            
             <div>
              <input type="checkbox" name="mark" id="mark" value="mark" v-model="powersystem">
              <label for="mark">mark</label>
             </div>
            
             <div>
              <input type="checkbox" name="none" id="none" value="none" v-model="powersystem">
              <label for="none">none</label>
             </div>

          </div>
        </div>
          

        <div>
          <label for="" class="user">ANIME GENERES</label>
          <textarea name="" id="" cols="2" class="area" v-model="single" @keyup="toGenre"></textarea>
          <ul class="newlist"><li class="item" v-for="(item, index) in animegener" :key="index">{{ item }}</li></ul> 

        </div>

        <div>
          <input type="checkbox" name="terms" id="terms" v-model="terms">
          <label for="terms" class="terms">Accept the terms and conditions</label>
        </div>

        <div>
          <button type="submit" class="submit">Register</button>
        </div>
        </form>

        <div>
          <div>
            <h3 class="inside">Results :</h3>
          </div>
            
          <div v-if="username">
            <h3>user Name :</h3>
            <p>{{ username }}</p>
          </div>
          <div v-if="password">
            <h3>PassWord :</h3>
            <p>{{ password }}</p>
          </div>
          <div v-if="favoranime">
            <h3>Favorite Anime :</h3>
            <p><b>{{ favoranime }}</b></p>
          </div>
          <div v-if="powersystem.length">
            <h3>Power System :</h3>
            <ul><li v-for="(item, index) in powersystem" :key="index">{{ item }}</li></ul> 
          </div>
          <div v-if="terms">
            <h3>terms :</h3>
            <p>{{ terms }}</p>
          </div>
          <div v-if="animegener.length">
            <h3>Animation Generes :</h3>
            <ul class="newlist"><li class="item" v-for="(item, index) in animegener" :key="index">{{ item }}</li></ul> 
           
          </div>
          





        </div>
     </div>


    
      

     </PageNotFound>
  
   
</template>
  
<script lang="js">
import PageNotFound from './views/PageNotFound.vue';


 
  export default {
    name: 'App',
    components : {
      PageNotFound
    },
   data(){
    return{
      username:"",
      password:"",
      favoranime:"",
      powersystem:[],
      animegener:[],
      single:"",
      terms: false,
     }
   },
   methods: {
    toGenre(e){
      if(e.key === ","){
        const x = this.single.substring(0,this.single.length- 1)
        this.animegener.push(x)
        this.single = ""
      }
    },
    handle(){
      //e.preventDefault();
      console.log({
      username: this.username,
      password: this.password,
      favoranime: this.favoranime,
      powersystem: this.powersystem,
      animegener: this.animegener,
      single: this.single,
      terms: this.terms,

      })
    }
    
   }
  
  


}  
    
</script>
  
  <style lang="css">
  
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
  </style>
  