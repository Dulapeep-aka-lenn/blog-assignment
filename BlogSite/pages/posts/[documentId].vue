<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const documentId = route.params.documentId
const post = ref(null)

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:1337/api/posts')
    const result = await res.json()
    const posts = result.data

    post.value = posts.find(p => p.documentId === documentId)

  } catch (err) {
    console.error('Failed to load post:', err)
  }
})
</script>

<template>
      <div class="All">
    <h1  class="Page">Post</h1>
  <div v-if="post" class="Content">
    <h1>{{ post.Title }}</h1>
    <p class="author">By: {{ post.author }}</p>
    <p class="cat">Category: {{ post.Category }}</p>

    <div v-for="(block, index) in post.Content" :key="index" class="Post_Content">
       <template v-if="block.type === 'paragraph'">
    <p v-for="(child, i) in block.children" :key="i">{{ child.text }}</p>
  </template>

    <template v-else-if="block.type === 'list'">
    <ol v-if="block.format === 'ordered'">
      <li v-for="(item, i) in block.children" :key="i">
        <span v-for="(child, j) in item.children" :key="j">{{ child.text }}</span>
      </li>
    </ol>
    <ul v-else>
      <li v-for="(item, i) in block.children" :key="i">
        <span v-for="(child, j) in item.children" :key="j">{{ child.text }}</span>
      </li>
    </ul>
  </template>
    </div>
  </div>

  <div v-else>
    <p>Loading post...</p>
  </div>
  </div>
</template>

<style lang="css">
.All{
  Margin-left:10vw;
  Margin-right:10vw;
  background-color: rgb(255, 203, 144);
}
.postsAll{

  display: grid;
  grid-column: 1fr 1fr;
  margin:15px
}

.Content{
  
  background-color: rgb(214, 236, 255);
   margin:10px;
   padding: 15px;
}

.author{
    background-color: rgb(186, 211, 233);
    padding:5px;
    border-radius:5px;
    margin:5px;
}
#category-select{
    background-color: rgb(255, 174, 201);
    border-radius: 4px;
    padding:5px;
    margin:15px;
}

h1{
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-size: larger;
  padding:10px;
  display: flex;
}

.Page{
 position: absolute;   
   top: 20px;  
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 50pX;
  color: rgb(75, 37, 124);
}
.Post_Content{
    Margin-top:20px;
}

.cat{
    Padding:20px;
}
</style>