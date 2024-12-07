import {defineComponent, toRef} from 'vue'

export default defineComponent({

  props: {
    name: {
      type: String
    },
    time: {
      type: String
    }
  },

  setup(props) {

    const name = toRef(props,'name'),
      time = toRef(props,'time')

    return {
      name,
      time
    }
  },

  template: `
    <div>
    <h2 class="weather-card__name">
      {{name}}
    </h2>
    <div class="weather-card__time">
      {{time}}
    </div>
    </div>
  `,
})
