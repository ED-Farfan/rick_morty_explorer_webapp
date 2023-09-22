<template>
  <div class="contenedor404">
    <img class="imgBig" src="/404.png">
    <div class="contendorText text-center">
      <h1 class="text-center">
        404
      </h1>
      <h2>El Recurso solicitado no fue encontrado</h2>
      <div class="contenedorBoton">
        <v-btn
          color="red"
          @click="regresar"
        >
          Regresar
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RickMortyExplorerWebapp404',

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
