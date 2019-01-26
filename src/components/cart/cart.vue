<template>
    <div class="container">
        <div class="head">
                <h2>Carrito</h2>
                <h2 class="cross">X</h2>
        </div>
        <div class="products">
        <div v-for="farm in getFarms">
            
            <div v-for="pack in packsAdded(farm)" class="farm">
            <p>Nombre de la Granja: <b>{{farm.name}}</b></p>
            <p>Nombre del pack: <b>{{pack.name}}</b></p>
            <p>Cantidad de packs: <b>{{pack.number}}</b></p>

            </div>
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

