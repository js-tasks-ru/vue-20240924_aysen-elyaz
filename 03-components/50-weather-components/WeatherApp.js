import { defineComponent } from 'vue'
import UiWeatherList from './components/UiWeatherList.js'

export default defineComponent({

  name: 'WeatherApp',

  components: {
    UiWeatherList,
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>
      <UiWeatherList/>
    </div>
  `,
})
