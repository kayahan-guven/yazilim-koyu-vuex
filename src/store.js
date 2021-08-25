import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    characters: []
};

const actions = {
    async fetchCharacters ({ commit }) {
        const response = await fetch('http://hp-api.herokuapp.com/api/characters')
        const data = await response.json();

        commit('setCharacters', data);
    }
};

const mutations = {
    setCharacters (state, data) {
        state.characters = data;
    },

    setCharacter (state, character) {
        state.characters.push(character)
    }
};

const getters = {
    getTeams (state) {
        return new Set(state.characters.map(character => character.house).filter(team => team !== ''))
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
