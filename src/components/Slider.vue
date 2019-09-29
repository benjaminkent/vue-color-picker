<template>
  <div class="columns is-centered">
    <div class="column is-one-third" style="margin: 0 20px;">
      <b-field label="Hue">
        <b-slider rounded v-model="value" :min="0" :max="360"></b-slider>
      </b-field>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Slider extends Vue {
  value: number = 0
}
</script>
