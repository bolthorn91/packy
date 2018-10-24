<template>
    <div>
        <div class="packs">
            <ul>
                <li  v-for="product in products" class="products">
                     <p class="name">{{product.name}}</p>
                     <p class="quantity">{{product.quantity}} unidades</p>
                     <p class="price">{{product.price}} €</p>
                <a class="btn btn-primary" @click="addProduct (product);">Añadir</a>
                <a class="btn btn-primary" @click="subtractProduct(product);">Quitar</a>
                </li>
            </ul>
        </div>

    </div>
</template>
<script src="./products.js"></script>
<style scoped src="./products.css"></style>

