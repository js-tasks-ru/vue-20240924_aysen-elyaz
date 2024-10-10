
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {

    const count = ref(0)
    const minVal = 0
    const maxVal = 5
    const plus = () => { if (count.value < maxVal) {  count.value++ } }
    const minus = () => { if (count.value > minVal) { count.value--  } }

    return {
      count,
      plus,
      minus,
      minVal,
      maxVal
    }
  },

  template: `
    <div class="counter">

      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled = "count === minVal"
        @click="minus"
      >➖</button>

      <span class="count" data-testid="count">{{count}}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled = "count === maxVal"
        @click="plus"
      >➕</button>

    </div>
  `,
})
