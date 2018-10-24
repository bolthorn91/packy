<template>
  <div class="cart">
    <cart-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import cartComponent from '@/components/cart/cart.vue'

export default {
  name: 'cart',
  components: {
    cartComponent,
  }
}
</script>