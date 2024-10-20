
import {defineComponent, ref} from 'vue'
import UiWeatherDetails from './UiWeatherDetails.js'
import UiWeatherConditions from './UiWeatherConditions.js'
import UiWeatherCardHead from './UiWeatherCardHead.js'
import UiWeatherAlert from './UiWeatherAlert.js'

export default defineComponent({

  name: 'UiWeatherCard',

  props: ['cardItem'],

  components: {
    UiWeatherDetails,
    UiWeatherConditions,
    UiWeatherCardHead,
    UiWeatherAlert
  },

  setup(props) {

    const item = ref(props.cardItem)

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
