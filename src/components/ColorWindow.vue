<template>
  <div class="window">
    <div class="columns is-centered">
      <div class="column is-one-quarter">
        <div
          class="color-window"
          :style="{ backgroundColor: pickedColorValues }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class ColorWindow extends Vue {
  pickedColorValues: string = 'hsla(300, 100%, 50%, 0.9)'
  // hue goes to 360
}
</script>

<style lang="scss" scoped>
.color-window {
  border: 1px solid #eee;
  height: 150px;
  width: 100%;
  margin-top: 20px;
  box-shadow: 0 3px 8px 1px #eee;
}
</style>
