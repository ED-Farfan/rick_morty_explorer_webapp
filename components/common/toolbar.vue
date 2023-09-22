<template>
  <div>
    <v-toolbar
      elevation="4"
      color="primary"
    >
      <div class="d-flex justify-space-between align-center" style="width: 100%;">
        <v-btn
          class="ml-3"
          depressed
          color="primary"
          @click="drawer = true"
        >
          Filter
        </v-btn>
        <div class="d-flex">
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
      </div>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="efects"
    >
      <div class="">
        <div class="primary mb-4 pa-2 white--text">
          <span class="text-h5">
            Filter
          </span>
        </div>
        <div class="px-3">
          <v-select
            v-model="gender"
            :items="genders"
            label="Genders"
            outlined
            @change="Search()"
          />
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'RickMortyExplorerWebappToolbar',

  data () {
    return {
      search: '',
      drawer: false,
      gender: '',
      genders: ['', 'female', 'male', 'genderless', 'unknown']
    }
  },

  mounted () {
    this.setValueSearch()
  },

  methods: {
    setValueSearch () {
      const params = this.getParamsUrl()
      const { name, gender } = params
      this.search = name || ''
      this.gender = gender
    },
    getParamsUrl () {
      const params = this.$route.query
      return params
    },
    async Search () {
      const search = this.search.trim().replace(/ +/g, ' ')
      const gender = this.gender
      this.drawer = false
      const param = { page: 1 };
      (search) && (param.name = search);
      (gender) && (param.gender = gender)
      const { page: pageQ, name: nameQ, gender: genderQ } = this.$route.query
      const { page: pageP, name: nameP, gender: genderP } = param
      if (pageQ !== pageP || nameQ !== nameP || genderQ !== genderP) {
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
.efects{
  background-color: #ffffff;
}
</style>
