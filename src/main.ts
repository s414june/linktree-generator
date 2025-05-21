import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faGithub,
  faXTwitter,
  faInstagram,
  faFacebook,
  faYoutube,
  faTiktok,
  faDiscord,
  faLinkedin,
  faReddit,
  faThreads,
  faPinterest,
  faTwitch,
  faTelegram,
  faWhatsapp,
  faMedium,
  faMastodon,
  faSnapchat,
  faSpotify,
  faSoundcloud,
  faVimeo,
} from '@fortawesome/free-brands-svg-icons'

const app = createApp(App)

app.use(createPinia())
app.use(router)

library.add(
  faGithub,
  faXTwitter,
  faInstagram,
  faFacebook,
  faYoutube,
  faTiktok,
  faDiscord,
  faLinkedin,
  faReddit,
  faThreads,
  faPinterest,
  faTwitch,
  faTelegram,
  faWhatsapp,
  faMedium,
  faMastodon,
  faSnapchat,
  faSpotify,
  faSoundcloud,
  faVimeo,
)

createApp(App).component('FontAwesomeIcon', FontAwesomeIcon).mount('#app')
