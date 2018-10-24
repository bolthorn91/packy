<template>
  <div class="contact">
    <products-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import productsComponent from '@/components/products/products.vue'

export default {
  name: 'products',
  components: {
    productsComponent,
  }
}
</script>