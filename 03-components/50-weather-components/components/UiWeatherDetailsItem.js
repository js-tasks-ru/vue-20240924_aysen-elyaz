import {defineComponent, ref} from 'vue'

export default defineComponent({

  name: 'UiWeatherDetailsItem',
  props: ['title', 'quantity'],


  setup(props) {

    const title = ref(props.title),
      quantity = ref(props.quantity)

    return {
      title,
      quantity
    }
},

  template: `

    <div class="weather-details__item">
    <div class="weather-details__item-label">{{title}}</div>
    <div class="weather-details__item-value">{{quantity}}</div>
    </div>
  `,
})
