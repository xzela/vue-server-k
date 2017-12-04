<template>
    <div id="main">
        <h1>From the Vue Main Component</h1>
        <div class="message">{{ message }}</div>
        <div>{{ other }}</div>
    </div>
</template>

<script>
export default {
    name: 'main',
    data () {
        console.log('Main Component loaded!');
        return {
            message: 'Hello from vue-loader!!',
            other: 'some other message'
        }
    }
}
</script>

<style scoped>
    h1 {
        font-style: bold;
    }
    .message {
      color: blue;
    }
</style>