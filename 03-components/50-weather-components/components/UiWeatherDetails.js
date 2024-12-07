
import {defineComponent, toRef} from 'vue'
import UiWeatherDetailsItem from './UiWeatherDetailsItem.js'

export default defineComponent({

  props: {
    weatherDetails: {
      type: Object
    }
  },

  components: {
    UiWeatherDetailsItem,
  },

  setup(props) {

    const details = toRef(props,'weatherDetails')

    return {
      details
    }
  },

  template: `
    <div class="weather-details">
    <UiWeatherDetailsItem :title="'Давление, мм рт. ст.'" :quantity="(details.pressure * 0.75).toFixed(0)"/>
    <UiWeatherDetailsItem :title="'Влажность, %'" :quantity="details.humidity"/>
    <UiWeatherDetailsItem :title="'Облачность, %'" :quantity="details.clouds"/>
    <UiWeatherDetailsItem :title="'Ветер, м/с'" :quantity="details.wind_speed"/>
    </div>
  `,
})
