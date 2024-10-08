<!-- src/components/CountryDetails.vue -->
<template>
    <div class="col-7">
      <div v-if="country">
        <img
          :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
          :alt="country.name.common"
          style="width: 300px"
        />
        <h1>{{ country.name.common }}</h1>
        <table class="table">
          <tbody>
            <tr>
              <td style="width: 30%">Capital</td>
              <td>{{ country.capital[0] }}</td>
            </tr>
            <tr>
              <td>Área</td>
              <td>{{ country.area.toLocaleString() }} km²</td>
            </tr>
            <tr>
              <td>Fronteras</td>
              <td>
                <ul>
                  <li v-for="border in borders" :key="border.alpha3Code">
                    <router-link :to="`/${border.alpha3Code}`">{{ border.name.common }}</router-link>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>País no encontrado.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { inject, ref, watch } from "vue";
  import { useRoute } from "vue-router";
  
  const countries = inject('countries');
  const route = useRoute();
  
  const country = ref(null);
  const borders = ref([]);
  
  const fetchCountry = () => {
    const code = route.params.alpha3Code.toUpperCase();
    country.value = countries.value.find(c => c.alpha3Code.toUpperCase() === code);
  
    if (country.value && country.value.borders && country.value.borders.length > 0) {
      borders.value = countries.value.filter(c =>
        country.value.borders.includes(c.alpha3Code)
      );
    } else {
      borders.value = [];
    }
  };
  
  // Observar cambios en la ruta
  watch(() => route.params.alpha3Code, fetchCountry, { immediate: true });
  </script>
  
  <style scoped>
  /* Agrega estilos adicionales si es necesario */
  </style>
  