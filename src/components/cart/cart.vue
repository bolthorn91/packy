<template>
    <div class="container">
        <div class="head">
                <h2>Carrito</h2>
                <h2 class="cross">X</h2>
        </div>
        <div class="products">
            <ul>
                <li class="title" v-for="product in products">
                    <div class="product">
                        <h4>{{product.name}}</h4>
                        <p>cantidad: {{product.quantity}}</p>
                        <p>precio/unidad: {{product.price}}</p>
                        <p>perico total: {{product.price*product.quantity}}</p>
                    </div>
                </li>
                <h3 class='total'>TOTAL: </h3>
            </ul>
        </div>
        <div class="btns">
            <a href="" class="btn buy"><h2>Realizar Compra</h2></a>
            <a href="" class="btn cancel"><h2>Cancelar Compra</h2></a>
        </div>
    </div>
</template>
<script src="./cart.js"></script>
<style scoped src="./cart.css"></style>

