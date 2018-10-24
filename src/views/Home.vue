<template>
  <div class="home">
    <appHome/>
  </div>
</template>

<script>
// @ is an alias to /src
import appHome from '@/components/appHome/appHome.vue'
import newsComponent from '@/components/appHome/news/news.vue'

export default {
  name: 'Home',
  components: {
    appHome,
    newsComponent


  }
}
</script>
