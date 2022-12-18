<script setup>
</script>

<template>
    <div class="main">
        <div class="icons">
            <a href="https://www.instagram.com" target="_blank"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            <a href="https://www.facebook.com" target="_blank"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
            <a href="https://ca.linkedin.com" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
        </div>
    </div>
</template>

<style scoped>
.main {
    margin: 50px;
    padding: 50px;
    
}

.main p{
    font-size: larger;
    text-align: center;
}

.icons{
    font-size: 100px;
    width: fit-content;
    margin: 0 auto;
}

.icons a {
    margin-left: 100px;
    color: white;
}

.icons a:first-of-type {
    margin-left: 0;
}


</style>