<template>
  <div class="hello">
    <div class="container">
      <ul>
        <li v-for="product in offerProducts">
         <p>{{product.name}}</p> 
         <p>{{product.quantity}}</p> 
         <p>{{product.price}}</p> 
        </li>
      </ul>
    </div>
  
  </div>
</template>

<script src="./appHome.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./appHome.css"></style>
