import { Module, VuexModule, getter, mutation, action } from "vuex-class-component";

@Module({ namespacedPath: "counter/"} )
export class CounterStore extends VuexModule {
  @getter value = 4;
  
  @mutation increaseValue() {
    this.value++;
  }

  @action()
  delayedDecrease(wait:number) {
    return new Promise<number>(resolve => {
      setTimeout(() => {
        resolve( this.value-- );
      }, wait );
    })
  }
}

export const counter = CounterStore.ExtractVuexModule( CounterStore );