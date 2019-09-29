<template>
  <div class="home">
    <MainHero />
    <ColorWindow :hsla="windowColor" />
    <div style="margin: 0 20px;">
      <div class="columns is-centered">
        <div class="column is-one-third">
          <b-field label="Hue">
            <b-slider rounded v-model="hueVal" :min="0" :max="360" />
          </b-field>
          <b-field label="Saturation">
            <b-slider rounded v-model="satVal" :min="0" :max="100" />
          </b-field>
          <b-field label="Lightness">
            <b-slider rounded v-model="lightVal" :min="0" :max="100" />
          </b-field>
          <b-field label="Alpha">
            <b-slider rounded v-model="alphaVal" :min="0" :max="100" />
          </b-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ColorWindow from '@/components/ColorWindow.vue'
import MainHero from '@/components/MainHero.vue'
import HslaStore from '@/store/modules/Hsla'

@Component({
  components: {
    ColorWindow,
    MainHero,
  },
})
export default class Home extends Vue {
  hueVal: number = 163
  satVal: number = 95
  lightVal: number = 52
  alphaVal: number = 100

  get windowColor() {
    return `hsla(${this.hueVal}, ${this.satVal}%, ${this.lightVal}%, ${this.trueAlphaValue})`
  }

  get trueAlphaValue() {
    return this.alphaVal / 100
  }
}
</script>
