import RandomNumberKeyboard from './RandomNumberKeyboard'
const install = function (Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  Vue.component(RandomNumberKeyboard.name, RandomNumberKeyboard)
}
export default install
