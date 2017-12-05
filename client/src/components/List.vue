<template>
    <div class="product-list">
        <h2>{{title}}</h2>
        <ul>
            <li v-for="i in list">
                <router-link :to="`/list/${i.id}`">{{i.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'product-list',
        // props: [],
        data() {
            console.log('List Component loaded');
            return {
                title: 'List Title',
                list: []
            }
        },
        created() {
            this.$http.get('http://localhost:8081/list')
                .then(response => {
                    return this.list = response.data;
                });
        }
    };
</script>

<style scoped>
    h2 {
        color: red;
        margin-bottom: 40px;
    }
    ul {
        list-style-type: none;
    }
</style>
