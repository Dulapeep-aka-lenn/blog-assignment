<script setup>
import { ref, onMounted, computed } from 'vue'
const allBlogs = ref([])
const Searched = ref('')


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


  } catch (err) {
    console.error('Failed to fetch blog posts :( :', err)
  }
})

const filteredBlogs = computed(() => {
  if (!Searched.value) {
    return allBlogs.value  // If no category selected, show all posts
  }
  const query = Searched.value.toLowerCase()

  return allBlogs.value.filter(post => {
    return post.title.toLowerCase().includes(query) || post.author.toLowerCase().includes(query)
})

})
  </script>



<template>
    <div class="All">
    <div class="Page">SEARCH</div>

  <div class="search-bar">
    <input
      type="text"
      v-model="Searched"
      placeholder="Search by title or author..."
      class="search-input"
    />
    <i class="fas fa-search search-icon"></i>
  </div>

<div class="postsAll"> 
    
    <div v-for="(blog, index) in filteredBlogs" :key="index" class="blog-card">
      <h2>{{ blog.title }}</h2>
      <p>Author:{{ blog.author }}</p>
      <p>{{ blog.snippet }}</p>
      <button class="View_buttons"> <NuxtLink :to="`/posts/${blog.documentId}`">View</NuxtLink>    </button>
    </div>
</div>
</div>
</template>



<style lang="css">
.postsAll{

  display: grid;
  grid-column: 1fr 1fr;
  margin:15px
}

.search-input{
    border:1px solid rgb(39, 41, 131);
    Padding:5px;
    margin:5px;
    background-color: rgb(255, 225, 198);
    border-radius: 4px;
}
</style>

<!-- Look, I know I could have used Pinia state management to load all the blogs and take everything from the stiore but I ran out of time to do that and copy and paste-ing is easy. Mistakes were made-->