<template>
    <div class="container">

        <div class="form">
            <form action="" method="POST">
                <h3>Email</h3>
                <input type="text" name="email" id="" placeholder="Email..." v-model="email" required @keyup.enter="validateUser(email, password);">
                <h3>Password</h3>
                <input type="text" name="password" id="" placeholder="Password..." v-model="password" required @keyup.enter="validateUser(email, password);">
            <div class="send">
                <a href="#" @click="validateUser(email, password)">Registrarse</a>
            </div>
            </form>
        </div>


    </div>
</template>
<script src="./login.js"></script>
<style scoped src="./login.css"></style>

