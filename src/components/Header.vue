<template>
    <!-- https://vueschool.io/lessons/route-transitions -->
    <header class="site-header">
        <router-link class="logo" :to="{ name: 'Home'}">exp</router-link>
        <nav>
            <ul>
                <li v-for="item in nav_items" :key="item">
                    <router-link :to="{ name: item }">{{
                    item
                    }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
const props = defineProps(["nav_items"]);
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #ddd;
}

ul {
    display: flex;
    list-style: none;
    margin: 0;
}

.logo,
li {
    padding: .5rem 1rem;
}
</style>