<template>
    <div>
        <div class="packs">
            <div v-for="farm in farms" class="farms">
                <p class="name">Nombre: {{farm.name}}</p>
                <p class="quantity">Lugar: {{farm.location}}</p>
                <p class="price">{{farm.description}}</p>
                         
                <ul v-for="farmPacks in farm.packs">
                        <li>
                            <h2> {{farmPacks.name}}</h2>
                            <h4>Productos</h4>
                         <div v-for="product in farm.products">
                                 <p>{{product.name}}: {{product.weight}}Kg</p>
                        </div>
                            <h3>Precio: {{farmPacks.price}}€</h3>
                            <a class="btn btn-primary" @click="addPackage (farmPacks, farm);">Añadir</a>
                            <a class="btn btn-primary" @click="subtractPackage (farmPacks, farm);">Quitar</a>
                            <p>Cantidad: {{farmPacks.number}}</p>
                        </li>
                 </ul>

            </div>
        </div>
        
    </div>

</template>
<script src="./products.js"></script>
<style scoped src="./products.css"></style>

