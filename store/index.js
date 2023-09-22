export const state = () => ({
  character: null
})

export const mutations = {
  setNewCharacter (state, data) {
    state.character = data
  }
}
export const getters = {
  getCharacter: (state) => {
    return state.character
  }
}
export const ssr = false
