import { createVuetify } from 'vuetify'
import 'vuetify/styles'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
  //   theme: {
  //     defaultTheme: 'customTheme',
  //     themes: {
  //       customTheme: {
  //         dark: false
  //         // colors: {
  //         //   primary: '#1976D2',
  //         //   background: '#ffffff',
  //         //   surface: '#ffffff',
  //         //   'on-primary': '#ffffff',
  //         //   'on-background': '#000000',
  //         //   'on-surface': '#000000'
  //         //   // Добавьте любые другие цвета
  //         // },
  //         // variables: {
  //         //   'btn-hover-color': '#1976D2' // Переопределение цвета при наведении
  //         // }
  //       }
  //     }
  //   }
})

export default vuetify
