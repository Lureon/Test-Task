export const state = () => ({
    input: '',
    button: {
      pressed: false
    },
    iconButton: {
      pressed: false
    },
    switch: true
})

export const mutations = {
  SetInput(state, text) {
    state.input = text
  },
  ButtonPress(state) {
    state.button.pressed = true
  },
  IconButtonPress(state) {
    state.iconButton.pressed = true
  },
  SwitchClick(state) {
    state.switch = !state.switch
  }
}
