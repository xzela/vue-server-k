<template>
    <div id="item">
        <h1>From the Vue Item Component</h1>
        <div>
            <h3>{{item.id}}</h3>
            <p>{{item.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'item',
    props: ['id'],
    data() {
        console.log('Item Component loaded!');
        return {
            item: {},
            message: 'Hello from vue-loader!!',
            other: 'some other message'
        }
    },
    created() {
        let id = this.$route.params.id;
        this.$http.get(`http://localhost:8081/list/${id}`)
        .then(data => {
            this.item = data;
        })
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
