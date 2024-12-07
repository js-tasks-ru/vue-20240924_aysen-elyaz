import {computed, defineComponent, toRef, ref, watch} from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({

  name: 'UiCounter',

  //props: ['min', 'max', 'count'],
  emits: ['update:count'],
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number
    },
    count: {
      type: Number
    }
  },

  components: {
    UiButton,
  },

  setup(props, ctx) {

    const min = toRef(props, 'min'),
      max = toRef(props, 'max'),
      propCount = toRef(props, 'count'),
      count = ref(propCount.value)

    const plus = () => {
      count.value++
    }

    const minus = () => {
      count.value--
    }

    const minusBnd = computed(() => {
      return count.value === min.value
    })

    const plusBnd = computed(() => {
      return count.value === max.value
    })

    watch(count, (newCount) => {
      ctx.emit('update:count', newCount)
    })

    watch(propCount, (newCount) => {
      count.value = newCount
    })

    return {
      plus,
      minus,
      min,
      max,
      count,
      propCount,
      minusBnd,
      plusBnd
    }

    // Рекомендуется для практики реализовать обработку событий внутри setup, а не непосредственно в шаблоне
  },

  template: `
    <div class="counter">
      <UiButton
        aria-label="Decrement"
        @click="minus"
        :disabled="minusBnd">
        ➖
      </UiButton>
      <span class="count" data-testid="count">{{count}}</span>
      <UiButton
        aria-label="Increment"
        @click="plus"
        :disabled="plusBnd">
        ➕
      </UiButton>
    </div>
  `,
})
