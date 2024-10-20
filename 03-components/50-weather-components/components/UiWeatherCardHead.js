import {defineComponent, ref} from 'vue'

export default defineComponent({

  name: 'UiWeatherCardHead',
  props: ['name', 'time'],

  setup(props) {

    const name = ref(props.name),
      time = ref(props.time)

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
