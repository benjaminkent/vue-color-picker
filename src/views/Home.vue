<template>
  <div class="home">
    <MainHero />
    <ColorWindow />
    <Slider />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ColorWindow from '@/components/ColorWindow.vue'
import MainHero from '@/components/MainHero.vue'
import Slider from '@/components/Slider.vue'

@Component({
  components: {
    ColorWindow,
    MainHero,
    Slider,
  },
})
export default class Home extends Vue {}
</script>
