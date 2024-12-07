import { defineComponent, ref } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import UiCounter from './UiCounter.js'

export default defineComponent({
  name: 'App',

  components: {
    UiButton,
    UiCounter,
  },

  setup() {

    const initCount1 = 1
    const initCount2 = 2

    const count1 = ref(initCount1)
    const count2 = ref(initCount2)

    function reset() {
      count1.value = initCount1
      count2.value = initCount2
    }

    return {
      count1,
      count2,
      reset,
    }
  },

  template: `
    <div>
      <p style="margin: 1em 0">
        <UiCounter v-model:count="count1" />

      </p>
      <p style="margin: 1em 0">
        <UiCounter v-model:count="count2" :min="1" :max="3" />
      </p>
      <p style="margin: 1em 0">
        <UiButton kind="primary" @click="reset">Reset</UiButton>
      </p>
    </div>
  `,
})
