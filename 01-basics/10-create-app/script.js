
import { defineComponent, createApp } from 'vue'

const App = defineComponent({

  name: 'App',

  template: '<div>Сегодня {{ getLocalDateAsString() }}</div>',

  setup () {

    function getLocalDateAsString() {
      return new Date().toLocaleDateString(navigator.language, {dateStyle: 'long'})
    }

    return {
      getLocalDateAsString,
    }
  },
})

createApp(App).mount('#app')
