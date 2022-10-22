<template>
  <aside class="float-start p-5 bg-light list-unstyled me-4">
    <h2 class="h6">Sidebar Dashboard</h2>
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'Protected' }">Dashboard</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'UserSecret' }">User Secret</router-link>
      </li>
    </ul>
  </aside>
</template>