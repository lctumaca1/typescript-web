import a from './electron/Electron'
import App from "./express/App";

//entry point class
export default class Main {

  private _app: App

  constructor() {
    this._app = new App()

    this.init()
  }

  public init() {
    this._app.startApp()
  }
}

const electron = new a()
const entryPoint = new Main()

