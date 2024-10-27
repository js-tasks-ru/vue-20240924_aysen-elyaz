import {defineComponent, ref} from 'vue'
import EmailListItem from './EmailListItem.js'

export default defineComponent({
  name: 'EmailList',

  components: {
    EmailListItem,
  },

  props: {
    emails: {
      type: Array,
      required: true,
    },
  },

  emits: ['removeEmailEvent'],

  setup(props, { emit }) {

    const removeEmailEventHandler = (index) => {
      emit('removeEmailEvent', index)
    }

    return {
      removeEmailEventHandler
    }
  },

  template: `
    <ul class="emails-list unstyled-list" aria-label="Emails">
      <EmailListItem
        v-for="({ email, isMarked }, index) in emails"
        :key="email"
        :email="email"
        :marked="isMarked"
        @remove-email-event="removeEmailEventHandler(index)"
      />
    </ul>
  `,
})
