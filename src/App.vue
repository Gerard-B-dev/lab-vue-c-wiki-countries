<!-- src/App.vue -->
<template>
  <div class="app">
    <NavBar />
    <div class="container">
      <div class="row">
        <CountriesList :countries="countries" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import NavBar from "./components/NavBar.vue";
import CountriesList from "./components/CountriesList.vue";
import countriesData from "./assets/countries.json";

const countries = ref(countriesData);

// Proveer los datos de countries a los componentes hijos
provide('countries', countries);
</script>

<style>
@import "./main.css";
/* Puedes agregar estilos adicionales aquí */
</style>
