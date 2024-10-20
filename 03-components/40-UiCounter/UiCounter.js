import {computed, defineComponent, ref} from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'
import {getEmails} from "../30-removable-emails/MarkedEmailsApp.js";
import {emails} from "../../02-basics-2/40-marked-emails/MarkedEmailsApp.js";

export default defineComponent({

  name: 'UiCounter',

  props: ['min', 'max', 'count'],
  emits: ['update:count'],

  components: {
    UiButton,
  },

  setup(props) {

    const min = ref(props.min),
      max = ref(props.max),
      count = ref(props.count)

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


    return {
      plus,
      minus,
      min,
      max,
      count,
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
