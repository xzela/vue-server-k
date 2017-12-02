<template>
    <div id="app">
        <div class="message">{{ message }}</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello from vue-loader!'
    }
  }
}
</script>

<style>
.message {
  color: blue;
}
</style>