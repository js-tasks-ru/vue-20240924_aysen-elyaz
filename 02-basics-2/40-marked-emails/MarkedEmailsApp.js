
import { computed, defineComponent, ref } from 'vue'

// Значения взяты из https://jsonplaceholder.typicode.com/comments
export const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
]

export default defineComponent({

  name: 'MarkedEmailsApp',

  setup() {

    let styleFlags = new Array(emails.length).fill(false),
      query = ref('')

    const calculatedFlags = computed(() => {

      if (!query.value) {
        for (var i = 0; i < styleFlags.length; i++) {
          styleFlags[i] = false
        }
      }
      else {
        for (var i = 0; i < styleFlags.length; i++) {
          styleFlags[i] = emails[i].indexOf(query.value) !== -1
        }}
        return styleFlags
    })

    return {
      calculatedFlags,
      query,
      emails
    }
  },

  template: `
    <div>
      <div class="form-group">
        <input type="search" aria-label="Search" v-model="query"/>
      </div>
      <ul aria-label="Emails" v-for="(email, index) in emails">
        <li :class="{ 'marked': calculatedFlags[index] }">
          {{email}}
        </li>
      </ul>
    </div>`,
})
