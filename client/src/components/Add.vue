<template>
    <div id="item">
        <h1>Add New Person</h1>
        <div>
            <form v-on:submit.prevent="post">
                <fieldset>
                    <label>Name:</label>
                    <input type="text" v-model="name" name="name" value="" placeholder="rad name here" />
                </fieldset>
                <fieldset>
                    <label>Submit:</label>
                    <input type="submit" value="Add" />
                </fieldset>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'add',
    data() {
        return {
            name: ''
        }
    },
    methods: {
        post() {
            let data = {
                name: this.name
            };
            this.$http.post(`http://localhost:8081/people`, data)
            .then(data => {
                this.$router.push('/people');
            })
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
