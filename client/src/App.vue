<template>
    <div id="app">
        <h1>
            <div>
                Peoples People
            </div>
        </h1>
        <ul class="menu">
            <li>
                <router-link to="/people">People</router-link>
            </li>
            <li>
                <router-link to="/add">Add New Person</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
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
        font-family: fantasy;
    }
    h1 div {
        width: 20%;
        animation: pulse 2000ms infinite;
    }

    .message {
      color: blue;
    }

    @keyframes pulse {
        from {
            transform: scale(1);
            color: yellow;
        }
        25% {
            transform: scale(0.90); /* rotate(2deg);*/
        }
        50% {
            transform: scale(1);
            color: red;
        }
        75% {
            transform: scale(0.90); /* rotate(0deg); */
        }
        to {
            transform: scale(1);
            color: yellow;
        }
    }
</style>
