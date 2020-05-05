import Vue from 'vue';
import Vuetify from 'vuetify';
import en from 'vuetify/src/locale/en';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import { VApp } from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VApp,
  },
});

export default new Vuetify({
  lang: {
    locales: { en },
    current: 'en',
  },
  icons: {
    iconfont: 'md',
  },
});
