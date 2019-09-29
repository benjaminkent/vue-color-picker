<template>
  <div class="window" style="margin: 0 20px;">
    <div class="columns is-centered">
      <div class="column is-one-quarter">
        <div class="color-window" :style="{ backgroundColor: hsla }"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class ColorWindow extends Vue {
  @Prop(String) readonly hsla!: string
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
