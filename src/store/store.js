import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        usgsHeaderRendered: false,
        introSectionRendered: false,
        windowWidth: 0,
        windowHeight: 0
    },
    mutations: {
        changeBooleanStateWhenUSGSHeaderRendered(state) {
            state.usgsHeaderRendered = true
        },
        changeBooleanStateWhenIntroSectionRendered(state) {
            state.introSectionRendered = true
        },
        recordWindowWidth (state, payload) {
            state.windowWidth = payload
        },
        recordWindowHeight (state, payload) {
            state.windowHeight = payload
        }
    }
});
