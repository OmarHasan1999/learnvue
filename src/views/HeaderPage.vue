<template lang="html">
    
    <header class="main">
        
     <nav class="navbar">
        <a href="/">
            <h1 class="hash">Food<span class="sp">Mood</span></h1>
        </a>

        <div class="list">
            <a href="/" class="link2">Home</a>
            <a href="/about" class="link2">About</a>
            <a href="/recipes" class="link2">Recipes</a>
            <a href="/download" class="link2">Download</a>
            <a href="/contact" class="link2">Contact</a>
        </div>
        
        <div class="sec">
            <label class="for">
            <span class="sear">search</span>
            <span class="box"><i class="fa-solid fa-magnifying-glass"></i></span>
            <input placeholder="Search for recipes.." class="form" name="search" type="text">
            </label>

        </div>
     </nav>
       
    </header>
    
</template>
<script>
export default {
    name:"HeaderPageVue"
}
</script>



<style lang="css">
@import "../css/Header.css";
</style>