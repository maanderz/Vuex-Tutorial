import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  title: "My Custom Title"
};

export default new Vuex.Store({
  state
});
