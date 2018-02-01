<template>
    <div id="item">
        <h1>From the Vue Item Component</h1>
        <h2>jsjsjsjs</h2>
        <div>
            <h2>Details:</h2>
            <div>
                <label>Id:</label>
                <span>{{item.id}}</span>
            </div>
            <div>
                <label>Name:</label>
                <span>{{item.name}}</span>
            </div>
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
        this.$http.get(`http://localhost:8081/people/${id}`)
        .then(data => {
            this.item = data.body;
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
