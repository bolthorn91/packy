<template>
    <div class="container">
    
        <div class="formSelector">
            <h3><router-link to="/signup/customer" name="customer">Usuario</router-link></h3>
            <h3><router-link to="/signup/farmer" name="farmer">Agricultor/Empresa</router-link></h3>
        </div>

    <router-view/>
        
    </div>
</template>
<script src="./signup.js"></script>
<style scoped src="./signup.css"></style>

