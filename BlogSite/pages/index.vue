<script setup>
    const { data: posts } = await useFetch('http://localhost:1337/api/posts');
</script>


<template>
  <div>
    <h1>Welcome to My Blog</h1>
    <p></p>
    <!-- List your blog posts here -->
  </div>
</template>