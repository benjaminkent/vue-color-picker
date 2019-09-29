import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from 'vuex-module-decorators'
import store from '@/store'

@Module({ namespaced: true, dynamic: true, store, name: 'hsla' })
class HslaStore extends VuexModule {
  hue: number = 163
  sat: number = 95
  light: number = 52
  alpha: number = 100
}

export default getModule(HslaStore)
