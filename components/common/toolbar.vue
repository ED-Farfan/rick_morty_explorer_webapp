<template>
  <v-toolbar
    elevation="4"
    color="primary"
  >
    <div class="d-flex justify-end" style="width: 100%;">
      <v-text-field
        v-model="search"
        label="Name Character"
        rounded
        hide-details="auto"
        style="max-width: 300px; background-color: rgb(255, 255, 255); "
        append-icon="mdi-search-web"
        @keypress.enter="Search()"
      />
      <v-btn
        class="ml-3"
        depressed
        color="primary"
        @click="Search()"
      >
        Buscar
      </v-btn>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  name: 'RickMortyExplorerWebappToolbar',

  data () {
    return {
      search: ''
    }
  },

  mounted () {
    this.setValueSearch()
  },

  methods: {
    setValueSearch () {
      const params = this.getParamsUrl()
      const { name } = params
      this.search = name || ''
    },
    getParamsUrl () {
      const params = this.$route.query
      return params
    },
    async Search () {
      const search = this.search.trim().replace(/ +/g, ' ')

      const param = { page: 1 };
      (search) && (param.name = search)

      if (this.$route.query?.page !== param.page && this.$route.query?.name !== param?.name) {
        await this.$router.push({ path: './', query: { ...param } })
        if (this.$route.path === '/') {
          await this.$router.replace({ path: './', query: { ...param } })
          window.location.reload()
        } else {
          await this.$router.push({ path: './', query: { ...param } })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
