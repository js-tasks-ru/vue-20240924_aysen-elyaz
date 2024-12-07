import {defineComponent, toRef} from 'vue'

export default defineComponent({

  props: {
    weatherAlert: {
      type: Object
    }
  },

  setup(props) {

    const alert = toRef(props, 'weatherAlert')

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
