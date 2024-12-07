
import {defineComponent, toRef} from 'vue'
import { WeatherConditionIcons } from '../weather.service.ts'

export default defineComponent({

  props: {
    weatherDetails: {
      type: Object
    }
  },

    setup(props) {

    const details = toRef(props,'weatherDetails')

    return {
      details,
      WeatherConditionIcons,
    }
  },

  template: `
    <div class="weather-conditions">
    <div class="weather-conditions__icon"
         :title="details.weather.description">{{WeatherConditionIcons[details.weather.id]}}️</div>
    <div class="weather-conditions__temp">{{(details.temp - 273.15).toFixed(1)}} °C</div>
    </div>
  `,
})
