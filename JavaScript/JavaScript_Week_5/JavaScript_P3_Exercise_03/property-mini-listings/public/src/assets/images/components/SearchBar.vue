<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    placeholder="Search by title or location..."
    class="search-input"
  />
</template>

<script>
export default {
  props: {
    modelValue: String
  }
}
</script>

<style scoped>
.search-input {
  padding: 10px;
  width: 300px;
  border-radius: 8px;
  border: 1px solid #ddd;
}
</style>

<template>
  <HeaderSection :count="filteredProperties.length" />

  <div class="controls">
    <SearchBar v-model="search" />

    <select v-model="sortOrder">
      <option value="low">Price: Low to High</option>
      <option value="high">Price: High to Low</option>
    </select>
  </div>

  <div class="grid">
    <PropertyCard
      v-for="property in filteredProperties"
      :key="property.id"
      :property="property"
      @toggle-favourite="toggleFavourite"
    />
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import PropertyCard from './components/PropertyCard.vue'
import SearchBar from './components/SearchBar.vue'
import properties from './data/properties'

export default {
  components: {
    HeaderSection,
    PropertyCard,
    SearchBar
  },

  data() {
    return {
      search: '',
      sortOrder: 'low',
      properties
    }
  },

  computed: {
    filteredProperties() {
      let filtered = this.properties.filter(property =>
        property.title.toLowerCase().includes(this.search.toLowerCase()) ||
        property.location.toLowerCase().includes(this.search.toLowerCase())
      )

      if (this.sortOrder === 'low') {
        filtered.sort((a, b) => a.price - b.price)
      } else {
        filtered.sort((a, b) => b.price - a.price)
      }

      return filtered
    }
  },

  methods: {
    toggleFavourite(id) {
      const property = this.properties.find(
        property => property.id === id
      )

      property.favourite = !property.favourite
    }
  }
}
</script>