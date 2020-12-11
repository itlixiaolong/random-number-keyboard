<template>
<div class="App">
	123
<!--html code-->
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
import RandomNumberKeyboard from './src/RandomNumberKeyboard'
import 'lib-flexible'
export default {
name:'App',
components:{
	VanRandomNumberKeyboard:RandomNumberKeyboard
},
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
