<!--Leanne van der Horst u24566935-->
<script setup>


</script>

<template>
 <head>

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
</head>   
    <ul>
          <li>
            <NuxtLink class="Header_link" to="/">Home</NuxtLink>
            <NuxtLink class="Header_link" to="/Projects">Search<i class="fas fa-search search-icon"></i></NuxtLink>   
            
          </li>
    </ul>
</template>

<style lang="css">
h2{
    color: black;
}
ul{
    display:grid;
    justify-content: right;
    background-color:rgb(69, 212, 248);
    box-shadow: 4px 4px 60px rgb(179, 191, 247);
    padding:10px;
}
 .Header_link{
    display:inline-grid;
    width: 100px;
    color:rgb(46, 46, 99);
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color:rgb(135, 137, 245);
    box-shadow: 4px 4px rgb(35, 18, 82);
    border-radius: 10%;
    padding:20px;
    margin:10px;
 }
 .Header_link:hover{
    color:rgb(49, 65, 153);
    background-color:rgb(111, 171, 211);
    box-shadow: 2px 2px rgb(94, 70, 161);
 }
</style>