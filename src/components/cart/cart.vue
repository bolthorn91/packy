<template>
    <div class="container">
        <div class="head">
                <h2>Carrito</h2>
                <h2 class="cross">X</h2>
        </div>
        <div class="products">
            <p>me cago en to</p>
        <div v-for="packs in packsAdded">
            <p>Packs: {{packs}}</p>
               <p>Packs: {{packs.name}}</p>
               <p>Packs: {{packs.number}}</p>
            </div>
                <h3 class='total'>TOTAL: </h3>
        </div>
        <div class="btns">
            <a href="" class="btn btn-primary">Realizar Compra</a>
            <a href="" class="btn btn-primary">Cancelar Compra</a>
        </div>
    </div>
</template>
<script src="./cart.js"></script>
<style scoped src="./cart.css"></style>

