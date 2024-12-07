import {defineComponent, ref, onUnmounted} from 'vue'

export default defineComponent({

  name: 'UiClock',

  setup() {

    const time = ref(null)

    let toLocaleTimeString = (date) => {
      return date.toLocaleTimeString(
        navigator.language,
        { timeStyle: 'medium' })
    }

    time.value  = toLocaleTimeString(new Date())

    let intervalId = setInterval(() =>
      time.value  = toLocaleTimeString(new Date()), 1000)

    onUnmounted(() => clearInterval(intervalId));

    return {
      time,
    }
  },

  template: `<div class="clock">{{ time }}</div>`,
})
