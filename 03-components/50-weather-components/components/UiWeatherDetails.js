
import {defineComponent, ref} from 'vue'
import UiWeatherDetailsItem from './UiWeatherDetailsItem.js'

export default defineComponent({

  name: 'UiWeatherDetails',
  props: ['weatherDetails'],

  components: {
    UiWeatherDetailsItem,
  },

  setup(props) {

    const details = ref(props.weatherDetails)

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
