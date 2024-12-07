
import {defineComponent, toRef} from 'vue'
import UiWeatherDetails from './UiWeatherDetails.js'
import UiWeatherConditions from './UiWeatherConditions.js'
import UiWeatherCardHead from './UiWeatherCardHead.js'
import UiWeatherAlert from './UiWeatherAlert.js'

export default defineComponent({

  props: {
    cardItem: {
      type: Object
    }
  },

  components: {
    UiWeatherDetails,
    UiWeatherConditions,
    UiWeatherCardHead,
    UiWeatherAlert
  },

  setup(props) {

    const item = toRef(props,'cardItem')

    return {
      item
    }
  },

  template: `
      <UiWeatherAlert :weather-alert="item.alert"/>
      <UiWeatherCardHead :name="item.geographic_name" :time="item.current.dt"/>
      <UiWeatherConditions :weather-details="item.current"/>
      <UiWeatherDetails :weather-details="item.current"/>
  `,
})
