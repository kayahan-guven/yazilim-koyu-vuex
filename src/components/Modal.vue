<template>
    <div class="modal-overlay">
        <div class="modal-body">
            <div>
                <input
                    v-model="character.name"
                    type="text">
            </div>
            <div>
                <input
                    v-model="character.house"
                    type="text">
            </div>
            <div>
                <input
                    v-model="character.image"
                    type="text">
            </div>
            <div>
                <button @click="$emit('addCharacter', character)">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal",

        data () {
            return {
                character: {
                    name: '',
                    house: '',
                    image: ''
                }
            }
        }
    }
</script>

<style scoped>
    .modal-overlay {
        position: fixed;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-body {
        background-color: white;
        padding: 32px;
    }
</style>
