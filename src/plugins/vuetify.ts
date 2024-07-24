import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        dark: false,
        colors: {
          primary: '#00796B',
          background: '#E0F7FA',
          surface: '#FFFFFF',
          'on-primary': '#FFFFFF',
          'on-background': '#333333',
          'on-surface': '#00796B'
        },
        variables: {
          'btn-hover-color': '#004D40'
        }
      }
    }
  }
})

export default vuetify
