<template>
  <v-container v-if="Character">
    <v-row no-gutters>
      <v-col cols="12" sm="4">
        <v-card
          elevation="2"
          class="pa-2"
        >
          <v-img
            :src="getCharacter.image"
          />
        </v-card>

        <!-- <v-card
          class="pa-2"
          outlined
          tile
        >
          Hola {{ getCharacter }}
        </v-card> -->
      </v-col>
      <v-col class="px-3">
        <div class="mb-3">
          <h1 class="text-primary">
            {{ getCharacter.name }}
          </h1>
        </div>
        <v-row no-gutters>
          <v-col class="mr-lg-2 mb-2">
            <v-card
              elevation="2"
              style="height: 370px; position: relative;"
            >
              <div class="px-3 py-5 bg-primary">
                <h3 class="white--text font-weight-regular">
                  Datos Generales
                </h3>
              </div>
              <div class="pa-2 d-flex flex-column justify-space-around" style="height: 300px;">
                <div>
                  <strong>Species:</strong> {{ getCharacter.species }}
                </div>
                <div>
                  <strong>Gender:</strong> {{ getCharacter.gender }}
                </div>
                <div>
                  <strong>Status:</strong> {{ getCharacter.status }}
                </div>
                <div>
                  <strong>Type:</strong> {{ getCharacter.type }}
                </div>
                <div>
                  <strong>Origin:</strong> {{ getCharacter.origin.name }}
                </div>
                <div>
                  <strong>Location:</strong> {{ getCharacter.location.name }}
                </div>
                <div>
                  <strong>created:</strong> {{ getDate(getCharacter.created) }}
                </div>
                <!-- {{ getCharacter }} -->
              </div>
            </v-card>
          </v-col>
          <v-col>
            <v-card
              elevation="2"
              class=""
            >
              <div class="px-3 py-5 bg-primary">
                <h3 class="white--text font-weight-regular">
                  Capitulos
                </h3>
              </div>
              <div>
                <v-simple-table
                  fixed-header
                  height="300px"
                >
                  <template #default>
                    <thead>
                      <tr>
                        <th class="text-left">
                          Name
                        </th>
                        <th class="text-left">
                          Episode
                        </th>
                        <th class="text-left">
                          Air Date
                        </th>
                        <th class="text-left">
                          Created
                        </th>
                      </tr>
                    </thead>
                    <tbody v-if="episodes.length === 0 && !loaderEpisodes">
                      <tr>
                        <td colspan="4">
                          <div class="text-center">
                            Sin Elementos
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    <tbody v-if="episodes.length">
                      <tr
                        v-for="episode in episodes"
                        :key="episode.name"
                      >
                        <td>{{ episode.name }}</td>
                        <td>{{ episode.episode }}</td>
                        <td>{{ episode.airDate }}</td>
                        <td>{{ getDate(episode.created) }}</td>
                      </tr>
                      <tr v-if="episodesURL.length > 0">
                        <td colspan="4">
                          <div class="text-center pa-2">
                            <v-btn
                              outlined
                              color="indigo"
                              :loading="loaderEpisodes"
                              @click="getEpisodeURL()"
                            >
                              Load more
                            </v-btn>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    <!-- <tbody v-else>
                      <tr>
                        <td colspan="4">
                          <div class="text-center">
                            ... Cargando Datos
                          </div>
                        </td>
                      </tr>
                    </tbody> -->
                  </template>
                </v-simple-table>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
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
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment-timezone'
import { getData } from '@/services/dataService'
import { Episode } from '@/utils/Episode'
export default {
  name: 'RickMortyExplorerWebappIndex',
  data () {
    return {
      Character: null,
      episodes: [],
      episodesURL: [],
      dataCount: 20,
      loaderEpisodes: true,
      snackbar: false,
      textSnackbar: ''

    }
  },
  head () {
    return {
      title: 'Detalle'
    }
  },
  computed: {
    ...mapGetters(['getCharacter'])
  },

  mounted () {
    this.getCharacterObject()
  },

  methods: {
    getCharacterObject () {
      const character = this.getCharacter
      this.Character = character
      if (this.Character) {
        this.episodesURL = []
        const idUrl = []
        const { episode = [] } = this.Character
        episode.forEach((url) => {
          idUrl.push(this.getIdUrl(url))
        })
        this.episodesURL = idUrl
        this.getEpisodeURL()
      } else {
        // Proxima actualizacion, traera los datos de la base
        this.$router.push('./404')
      }
    },
    async getEpisodeURL () {
      this.loaderEpisodes = true
      const episodes = this.episodesURL.slice(0, this.dataCount).join(',')
      const ruta = `episode/${episodes}`
      const { error, errorCode, errorText, data } = await getData({ ruta })
      if (error) {
        if (errorCode === 404) {
          this.$router.push('./404')
        } else {
          this.textSnackbar = `${errorText}`
          this.snackbar = true
        }
      }
      if (!error && data) {
        this.episodesURL = this.episodesURL.slice(this.dataCount)
        if (Array.isArray(data)) {
          data.forEach((result) => {
            const episode = new Episode(result)
            this.episodes.push(episode)
          })
        } else {
          const episode = new Episode(data)
          this.episodes.push(episode)
        }
      }
      this.loaderEpisodes = false
    },
    getDate (date) {
      const now = moment(date).utc()
      return now.format('DD/MM/YYYY HH:mm')
    },
    getIdUrl (url) {
      const partesUrl = url.split('/')
      return partesUrl.pop()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
