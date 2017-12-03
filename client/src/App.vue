<template>
    <div id="app">
        <h1>From the App Component</h1>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        console.log('App Component loaded!');
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