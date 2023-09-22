<template>
  <v-app>
    <div class="mainContainer">
      <ToolBar class="containerNav"/>
      <div class="containerApp pa-5">
        <Nuxt />
      </div>
    </div>
  </v-app>
</template>

<script>
import ToolBar from '~/components/common/toolbar.vue' // Importando el componente
export default {
  name: 'DefaultLayout',
  components: {
    ToolBar
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
