<template>
    <div class="product-list">
        <h2>{{title}}</h2>
        <ul>
            <li v-for="i in [1,2,3,4,5]">
                {{i}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'product-list',
        // props: [],
        data() {
            return {
                title: 'List Title'
            }
        }
    };
</script>

<style scoped>
    h2 {
        margin-bottom: 40px;
    }
    ul {
        list-style-type: none;
    }
</style>    