import KKController from "./Controllers/KKController.js";

class App {
  constructor() {
    console.log("APp is made")
  }
  kkController = new KKController();
}

window["app"] = new App();
