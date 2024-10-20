import { defineComponent } from 'vue'

export default defineComponent({

  name: 'EmailListItem',

  props: {
    email: {
      type: String,
      required: true,
    },

    marked: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['removeEmailEvent'],

  //setup(props, { emit }) {
  //  //emit('removeEmail')
  //},

  template: `
    <li :class="{ marked }">
      {{ email }}
      <!--button type="button" aria-label="Удалить" @click.stop>❌</button-->
      <button type="button" aria-label="Удалить" @click="$emit('removeEmailEvent')">❌</button>
    </li>
  `,
})
