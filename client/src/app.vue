<template>
    <div id="app">
        <h1>Loaded</h1>
        <div class="message">{{ message }}</div>
        <div>{{ other }}</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello from vue-loader!!',
      other: 'some other message'
    }
  }
}
</script>

<style scoped>
    .message {
      color: blue;
    }
</style>