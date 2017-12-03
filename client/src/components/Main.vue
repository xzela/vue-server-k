<template>
    <div id="app">
        <h1>From the Vue Main Component</h1>
        <div class="message">{{ message }}</div>
        <div>{{ other }}</div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        console.log('asdfsd');
        return {
            message: 'Hello from vue-loader!!',
            other: 'some other message'
        }
    }
}
</script>

<style scoped>
    h1 {
        font-style: italic;
    }
    .message {
      color: blue;
    }
</style>