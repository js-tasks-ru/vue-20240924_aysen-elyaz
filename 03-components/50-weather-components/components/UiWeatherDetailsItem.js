import {defineComponent, toRef} from 'vue'

export default defineComponent({

  props: {
    title: {
      type: String
    },
    quantity: {
      type: Number
    }
  },


  setup(props) {

    const title = toRef(props,'title'),
      quantity = toRef(props,'quantity')

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
