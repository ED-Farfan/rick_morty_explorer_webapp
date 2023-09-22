<template>
  <div>
    <div v-if="!loader" class="containerCardsCharacter mb-8">
      <CardCharacter v-for="(character,index) in characters" :key="index" :character="character" class="cardCharacter" />
    </div>
    <div v-else class="containerCardsCharacter mb-10">
      <v-sheet
        v-for="(n) in 20"
        :key="n"
        color=" ma-2"
      >
        <v-skeleton-loader
          class="mx-auto"
          type="card"
        />
      </v-sheet>
    </div>
    <v-snackbar
      :timeout="2000"
      :value="snackbar"
      absolute
      bottom
      color="red accent-2"
      text
    >
      {{ textSnackbar }}
      <template #action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="totalPages"
        :total-visible="7"
        circle
        @input="clickPage"
      />
    </div>
  </div>
</template>

<script>
import CardCharacter from '@/components/pages/character/CharacterDetails.vue'
import { objectToQueryString } from '~/utils/querystring'
import { getData } from '@/services/dataService'
import { Character } from '@/utils/Character'
export default {
  name: 'RickMortyExplorerWebappIndex',
  components: { CardCharacter },
  data () {
    return {
      page: 1,
      dataCount: 20,
      totalCharacters: 0,
      totalPages: 0,
      characters: [],
      loader: true,
      params: '',
      snackbar: false,
      textSnackbar: ''
    }
  },
  head () {
    return {
      title: 'Home'
    }
  },

  mounted () {
    this.loadData()
  },

  methods: {
    async clickPage (pageNumber) {
      const paramsOriginal = this.getParamsUrl()
      const params = { ...paramsOriginal }
      params.page = pageNumber

      if (JSON.stringify(this.$route.query) !== JSON.stringify(params)) {
        await this.$router.replace({ query: params })
        window.location.reload()
      }
    },
    setPageParameters ({ page } = {}) {
      this.page = page ? Number(page) : 1
    },
    getParamsUrl () {
      const params = this.$route.query
      return params
    },
    async loadContent (Objectparams = {}) {
      this.loader = true
      this.characters = []
      const ruta = 'character'
      const params = objectToQueryString(Objectparams)
      const { error, errorCode, errorText, data } = await getData({ ruta, variables: params })

      if (error) {
        if (errorCode === 404) {
          this.$router.push('./404')
        } else {
          this.textSnackbar = `${errorText}`
          this.snackbar = true
        }
      }
      if (!error) {
        const { error, info, results } = data
        if (info && results) {
          const { count, pages } = info
          this.totalPages = pages
          this.totalCharacters = count
          const Characters = []
          results.forEach((result) => {
            const character = new Character(result)
            Characters.push(character)
          })
          this.characters = Characters
        }
        if (!(info && results)) {
          this.snackbar = true
          this.textSnackbar = error ? `${error}` : 'Error al cargar los datos'
        }
      }
      this.loader = false
    },
    loadData () {
      const Objectparams = this.getParamsUrl()
      this.setPageParameters(Objectparams)
      this.loadContent(Objectparams)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
