<template>
  <div class="contenedorError">
    <div class="contenedorImagen">
      <img src="/Error.png" class="imgError">
    </div>
    <div class="contentText">
      <div class="text">
        Parece que tenemos un Error
      </div>
      <div class="contenedorBoton">
        <v-btn @click="regresar">
          Home {{ error }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RickMortyExplorerWebappErrors',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {
    regresar () {
      this.$router.push('./')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
