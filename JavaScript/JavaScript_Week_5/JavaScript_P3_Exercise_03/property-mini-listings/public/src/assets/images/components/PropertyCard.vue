<template>
  <div class="card">
    <img :src="property.image" :alt="property.title">

    <span v-if="!property.available" class="badge">
      Not Available
    </span>

    <h3>{{ property.title }}</h3>
    <p>{{ property.location }}</p>
    <p>{{ property.type }}</p>
    <p>R{{ property.price }}</p>

    <button @click="$emit('toggle-favourite', property.id)">
      {{ property.favourite ? '❤️ Saved' : '🤍 Save' }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['property']
}
</script>