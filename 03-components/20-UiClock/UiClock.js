import {defineComponent, ref, onUnmounted} from 'vue'

export default defineComponent({

  name: 'UiClock',

  setup() {

    const time = ref(null)
    let intervalId = setInterval(() =>
        time.value  = (new Date()).toLocaleTimeString(navigator.language, { timeStyle: 'medium' }),1000)
    onUnmounted(() => clearInterval(intervalId));

    return {
      time,
    }
  },

  template: `<div class="clock">{{ time }}</div>`,
})
