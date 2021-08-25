<template>
    <div>
        <div class="teams">
            <select @change="selectTeam">
                <option
                    v-for="team in $store.getters.getTeams"
                    :key="team"
                    :value="team">{{ team }}
                </option>
            </select>
        </div>
        <div class="section">
            <character-box
                v-for="char in filteredCharacters"
                :key="char.id"
                :image="char.image"
                :name="char.name"
                :team="char.house">
            </character-box>
            <div
                class="add-new-char"
                @click="modalVisibility = !modalVisibility">
                <div class="empty-image"></div>
                <div>Add New Character</div>
            </div>
            <modal
                v-show="modalVisibility"
                @addCharacter="value => addNewCharacter(value)">
            </modal>
        </div>
    </div>
</template>

<script>
    import CharacterBox from "./components/CharacterBox";
    import Modal from './components/Modal'

    export default {
        name: 'App',

        components: {
            CharacterBox,
            Modal
        },

        data () {
            return {
                modalVisibility: false,
                filter: 'Gryffindor'
            }
        },

        mounted () {
            this.$store.dispatch('fetchCharacters');
        },

        computed: {
            filteredCharacters () {
                return this.$store.state.characters.filter(character => character.house === this.filter);
            }
        },

        methods: {
            addNewCharacter (value) {
                this.$store.commit('setCharacter', value)
                this.modalVisibility = false;
            },

            selectTeam (event) {
                this.filter = event.target.value;
            }
        }
    }
</script>

<style>
    .section {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-row-gap: 50px;
        grid-column-gap: 20px;
    }

    .add-new-char {
        cursor: pointer;
    }

    .empty-image {
        width: 200px;
        height: 200px;
        background-color: gray;
        border-radius: 100%;
        display: inline-block;
    }

    .teams {
        text-align: center;
        margin-bottom: 50px;
    }
</style>
