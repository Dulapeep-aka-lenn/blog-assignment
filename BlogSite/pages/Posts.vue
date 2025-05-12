<script>
    const { data: post } = await useFetch(`http://localhost:1337/api/posts?filters[slug][$eq]=${route.params.slug}`);
</script>

<template>
    <h1>Post</h1>
</template>