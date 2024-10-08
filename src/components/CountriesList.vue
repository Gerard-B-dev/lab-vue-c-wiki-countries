<!-- src/components/CountriesList.vue -->
<template>
    <div class="col-5" style="max-height: 90vh; overflow: auto">
      <div class="list-group">
        <router-link
          v-for="country in countries"
          :key="country.alpha3Code"
          :to="`/${country.alpha3Code}`"
          class="list-group-item list-group-item-action"
          :class="{ active: country.alpha3Code === currentCode }"
        >
          <img
            :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
            :alt="country.name.common"
            style="width: 32px; margin-right: 10px"
          />
          <span>{{ country.name.common }}</span>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CountriesList",
    props: {
      countries: {
        type: Array,
        required: true,
      },
    },
    computed: {
      currentCode() {
        return this.$route.params.alpha3Code;
      },
    },
  };
  </script>
  
  <style scoped>
  .list-group-item.active {
    background-color: #0d6efd;
    border-color: #0d6efd;
    color: white;
  }
  </style>
  