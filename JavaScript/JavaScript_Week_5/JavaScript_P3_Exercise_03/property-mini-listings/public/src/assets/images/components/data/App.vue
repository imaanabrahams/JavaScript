<template>
  <HeaderSection :count="filteredProperties.length" />

  <div class="controls">
    <input
      v-model="search"
      placeholder="Search properties..."
    >

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
import PropertyCard from './components/PropertyCard.vue'
import HeaderSection from './components/HeaderSection.vue'
import properties from './data/properties'

export default {
  components: {
    PropertyCard,
    HeaderSection
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
        property.title
          .toLowerCase()
          .includes(this.search.toLowerCase()) ||
        property.location
          .toLowerCase()
          .includes(this.search.toLowerCase())
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