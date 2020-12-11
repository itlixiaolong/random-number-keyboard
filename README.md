## 组件介绍: 
该组件是一个用于银行系统支付或者输入密码时的数字随机生成的键盘组件,基于vant的风格进行二次开发,可以和vant组件库无缝衔接使用,兼容vant组件库中NumberKeyboard组件所有用法,想使用随机数字键盘时,只需将theme的值设置为'random'即可激活随机数字键盘
### 安装
```
npm i random-number-keyboard -S
```
or
```
yarn add random-number-keyboard 
```
### 使用
- 在main.js中
```
import Vue from 'vue'

import RandomNumberKeyboard from 'random-number-keyboard'
import 'random-number-keyboard/dist/RandomNumberKeyboard.css'

Vue.use(RandomNumberKeyboard)

```
- 在组件中
```
<template>
  <div class="home">
    <div>{{ value }}</div>
    <button @click="handleClick">
      点击切换
    </button>
    <van-random-number-keyboard
      v-model="value"
      :show="show"
      theme="random"
      extra-key="."
      close-button-text="完成"
      @input="onInput"
      @delete="onDelete"
    />
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      show: false,
      value: ''
    }
  },
  methods: {
    onInput() {},
    onDelete() {},
    handleClick() {
      this.show = !this.show
    }
  }
}
</script>
<style lang="scss">

</style>

```
- 效果
![avatar](http://itlixiaolong.xyz/my_npm_packages_imgs/random_number_keyboard_result.png)