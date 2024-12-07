import { defineComponent } from 'vue'
import { getWeatherData } from '../weather.service.ts'
import UiWeatherCard from './UiWeatherCard.js'

export default defineComponent({

  components: {
    UiWeatherCard
  },

  setup: function() {

    let getDate = (timeString) => new Date(`1970-01-01T${timeString}`)

    return {
      getWeatherData,
      getDate
    }
  },

  template: `
    <div>
      <ul class="weather-list unstyled-list">
        <li v-for="(item, index) in getWeatherData()"
          class="weather-card"
          :class="{ 'weather-card--night': getDate(item.current.dt) < getDate(item.current.sunrise) || getDate(item.current.dt) > getDate(item.current.sunset) }">
          <UiWeatherCard :card-item="item"/>
        </li>
      </ul>
    </div>
  `,
})
