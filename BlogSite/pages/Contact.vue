<!--Leanne van der Horst u24566935-->
<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const blog = ref(null)

onMounted(async () => {
  const id = route.params.id
  const res = await fetch(`http://localhost:1337/api/posts/${id}`)
  const result = await res.json()

  blog.value = {
    title: result.Title,
    author: result.author,
    content: result.Content
  }
})

</script>

<template>
    <div class="Page"> Blog post</div>


</template>

<style lang="css">
form {
    background-color: rgb(235, 237, 255);
    display:grid;
    justify-content: center;
    margin-left:20%;
    margin-right:20%;
    margin-top:5%;
    padding:15px;
    border-radius: 20px;
    box-shadow: 5px 5px 2px rgb(189, 188, 255);
}

form input{
    border:2px solid rgb(40, 46, 133);
    border-radius: 120px;
    margin:20px;
    background-color: rgb(213, 233, 253);
    width:100%;
    padding:4px;
}
 select, textarea{
    border:2px solid rgb(37, 45, 114);
    border-radius: 4px;
    margin:20px;
    background-color: rgb(213, 233, 253);
    width:100%;
    padding:4px;
}


form input:active{
    background-color: rgb(142, 165, 185);
}

 button{
    background-color: rgb(34, 115, 185);
    box-shadow: 4px 2px 2px 2px black;
    display: flex;
    justify-content: center;
    padding:10px;
    color:white;
    border-radius: 10px;
}

button:hover{
    background-color: rgb(22, 77, 124);
    box-shadow: 1px 1px 2px black;
}
.Page{
    position: absolute;
    top:2%;
    left:6%;
    font-size: 220%;
    color:rgb(94, 70, 161);
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}
h2{
    padding:20px;
}

</style>