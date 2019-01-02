import { VuexModule, Module, action, getRawActionContext, } from "vuex-class-component";

@Module({ namespacedPath: "alert/" })
export class AlertStore extends VuexModule {

  private message:string|undefined = undefined

  /**
   * The raw action mode allows you to use Async/Await syntax
   */
  @action({ mode: "raw" })
  async alert({message, delay}:AlertPayload) {
    const context = getRawActionContext<AlertStore, AlertStore>( this ); // You can't use this after this line. Only context.
    context.state.message = message;
    return new Promise<string>((reslove) => {
      setTimeout(() => {
        alert( context.state.message );
      }, delay )
    })
  }
}

export const alertMessage = AlertStore.ExtractVuexModule( AlertStore );

interface AlertPayload {
  message:string;
  delay:number;
}