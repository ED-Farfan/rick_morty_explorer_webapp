<template>
  <div style="width: 100%; height: 100%;" class="pa-3" :class="{ 'on-hover': hover }">
    <v-card
      class="rounded"
      style="width: 100%; height: 100%;
      background-color:white; position: relative;"
      :elevation="hover ? 6 : 2"
      @mouseover="PointerOn(true)"
      @mouseout="PointerOn(false)"
    >
      <!-- {{ character }} -->
      <div class="d-flex  flex-column pa-3 justify-center align-content-center">
        <div class="imagen">
          <v-img
            :src="character.image"
            class="grey lighten-2"
          >
            <template #placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                />
              </v-row>
            </template>
          </v-img>
        </div>

        <div class=" containerText flex-grow-1 ">
          <div class="d-flex">
            <div class=" mr-3">
              <div class="lineaVertical" :class="`bg-${character.color}`" />
            </div>
            <div>
              <div>
                <h3 class="text-primary">
                  {{ character.name }}
                </h3>
              </div>
              <div class="flex-grow-1 d-flex flex-column justify-end">
                <span class="subtitle-1 mb-1">
                  <strong>Species:</strong> <span>{{ character.species }}</span>
                </span>
                <span class="subtitle-1">
                  <strong>Gender:</strong> <span>{{ character.gender }}</span>
                </span>
              </div>
            </div>
          </div>
          <div class="d-flex d-flex justify-center py-3">
            <v-btn
              color="primary"
              outlined
              block
              @click="clickSave"
            >
              <v-icon small>
                mdi-plus
              </v-icon>
              Detalle
            </v-btn>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'RickMortyExplorerWebappCharacterDetails',
  props: {
    character: {
      type: Object,
      default () {
        return null
      }
    }
  },

  data () {
    return {
      hover: false
    }
  },

  mounted () {

  },

  methods: {
    ...mapMutations(['setNewCharacter']),
    async clickSave () {
      await this.SaveCharacter()
      const { id: idCharacter } = this.character
      // const param = { id: idCharacter }
      // console.log('🚀 ~ file: CharacterDetails.vue:102 ~ clickSave ~ this.character:', this.character)
      this.$router.push({ path: `/detalle/${idCharacter}` })
    },
    async SaveCharacter () {
      const newData = this.character
      await this.setNewCharacter(newData)
    },
    PointerOn (cursorOn = false) {
      this.hover = cursorOn
      this.$emit('hover', cursorOn)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
