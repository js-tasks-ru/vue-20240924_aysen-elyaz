
import {defineComponent, ref, computed} from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {

    const picked = ref(''),
        first =  ref(0),
        second = ref(0)

    const calculatedResult = computed(() => {

      switch (picked.value) {
        case "sum":
          return first.value + second.value;
          break;
        case "subtract":
          return first.value - second.value;
          break;
        case "multiply":
          return first.value * second.value;
          break;
        case "divide":
          if (second.value != 0) {
            return first.value / second.value;
          }
          break
        default:
          return 0
      }
    })

    return {
      picked,
      calculatedResult,
      first,
      second
    }

  },

  template: `
    <div class="calculator">
      <input type="number" v-model="first" aria-label="First operand" />

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="picked"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="picked"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="picked"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="picked"/>➗</label>
      </div>

      <input type="number" v-model="second" aria-label="Second operand" />

      <div>=</div>

      <output>{{ calculatedResult }}</output>
    </div>
  `,
})
