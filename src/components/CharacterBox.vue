<template>
    <div>
        <img :src="image">
        <div><b>{{ team }}</b></div>
        <div>{{ name }}</div>
    </div>
</template>

<script>
    export default {
        name: "CharacterBox",

        props: {
            name: {
                type: String,
                required: true
            },
            team: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 100%;
        object-position: top;
    }
</style>
