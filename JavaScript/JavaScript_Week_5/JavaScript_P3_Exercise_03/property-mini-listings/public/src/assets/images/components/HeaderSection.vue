<template>
  <header>
    <h1>Homes & Beyond</h1>
    <p>{{ count }} Properties Available</p>
  </header>
</template>

<script>
export default {
  props: ['count']
}
</script>