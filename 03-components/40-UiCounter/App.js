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

    const initCount1 = ref(1)
    const initCount2 = ref(2)

    const count1 = ref(initCount1.value)
    const count2 = ref(initCount2.value)

    function reset() {

      count1.value = initCount1.value
      count2.value = initCount2.value
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
