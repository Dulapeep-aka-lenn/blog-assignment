<script setup>
import { ref, onMounted } from 'vue'
const allBlogs = ref([])
const selectedCategory = ref('')


onMounted(async () => {
  try {
    const res = await fetch('http://localhost:1337/api/posts')
    const result = await res.json()
    allBlogs.value = result.data.map(post => {
      const title = post.Title
      const author = post.author   
      const category = post.Category || 'Uncategorized'
      const id = post.id
      const documentId = post.documentId

     let snippet = ''
      const firstBlock = post.Content?.[0]
      const firstChild = firstBlock?.children?.[0]
      const text = firstChild?.text

      if (text) {
        snippet = text.slice(0, 100) + '...'
      }

      return {
          id,
          documentId,
        title,
        author,
        category,
        snippet
      }

    })
console.log( blog.id ) 

  } catch (err) {
    console.error('Failed to fetch blog posts :( :', err)
  }
})

const filteredBlogs = computed(() => {
  if (!selectedCategory.value) {
    return allBlogs.value  // If no category selected, show all posts
  }
  return allBlogs.value.filter(post => post.category === selectedCategory.value)
})


  </script>

<template>
  <div class="All">
<!-- Dropdown :D -->
      <label for="category-select"></label>
    <select id="category-select" v-model="selectedCategory">
      <option value="">All Categories</option>
      <option value="Funny"> Funny </option>
      <option value="Art"> Art </option>
      <option value="Uplifting"> Uplifting </option>
      <option value="Sports"> Sports </option>
    </select>


    <div class="Page">HOME</div>

    <div class="content">
    <div class="Intro"> 


    </div > 
<div class="postsAll"> 
   
    <div  v-for="(blog, index) in filteredBlogs" :key="index" class="blog-card">
      <h2>{{ blog.title }}</h2>
      <p>By : {{ blog.author }}</p>
      <p>{{ blog.snippet }}</p>
      
      <button class="View_buttons"> <NuxtLink :to="`/posts/${blog.documentId}`">View</NuxtLink>    </button>
</div>    

</div>
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

.blog-card{
  
  background-color: rgb(214, 236, 255);
   margin:10px;
   padding: 15px;
}

.View_buttons{
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

h2{
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


</style>