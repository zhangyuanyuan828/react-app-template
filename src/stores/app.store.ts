import { makeAutoObservable } from 'mobx'
import { RootStore } from './root.store'

export class AppStore {
  rootStore: RootStore

  count: number = 2 ** 16

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this, { rootStore: false }, { deep: false })
  }

  increase() {
    this.count++
  }
}
