import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faUserSecret,
  faCodeCompare,
  faStar,
  faUser,
  faMugHot,
  faHeadset,
  faBasketShopping,
  faBars,
  faMagnifyingGlass,
  faPlaneUp,
  faWallet,
  faGift,
  faLink,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons'
import './index.css'

/* add icons to the library */
library.add(
  faUserSecret,
  faCodeCompare,
  faStar,
  faUser,
  faMugHot,
  faHeadset,
  faBasketShopping,
  faBars,
  faMagnifyingGlass,
  faPlaneUp,
  faWallet,
  faGift,
  faEye,
  faHeart,
  faLink,
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
  faPinterestP,
  faTrash,
)

const app = createApp(App)
app.component('font-i', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
