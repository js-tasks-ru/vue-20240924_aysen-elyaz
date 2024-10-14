
import { defineComponent, ref, watch } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({

  name: 'SelectedMeetupApp',

  setup() {

    let picked = ref(null),
        meetupCount = 5,
        title = ref('')

    watch(picked, async (newPicked) => {
        title.value = (await getMeetup(newPicked)).title
    })

    const plus  = () => {
       picked.value++
    }

    const minus  = () => {
      picked.value--
    }

    picked.value = 1;

    return {
      picked,
      meetupCount,
      title,
      plus,
      minus
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button class="button button--secondary" type="button" :disabled = "picked === 1" @click="minus" >Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          <div v-for="index in meetupCount" class="radio-group__button">
            <input
              :id="'meetup-id-' + index"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="index"
              v-model="picked"
            />
            <label :for="'meetup-id-' + index" class="radio-group__label">{{index}}</label>
          </div>
        </div>

        <button class="button button--secondary" type="button" :disabled = "picked === meetupCount" @click="plus">Следующий</button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{title}}</h1>
        </div>
      </div>

    </div>
  `,
})
