import {defineComponent, ref} from 'vue'

export default defineComponent({

  name: 'UiWeatherAlert',
  props: ['weatherAlert'],

  setup(props) {

    const alert = ref(props.weatherAlert)

    return {
      alert
    }
  },

  template: `
    <div v-if="alert"
         class="weather-alert">
    <span class="weather-alert__icon">⚠️</span>
    <span class="weather-alert__description">{{alert.sender_name}}: {{alert.description}}</span>
    </div>
  `,
})
