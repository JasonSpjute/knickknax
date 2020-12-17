import KKController from "./Controllers/KKController.js";

class App {
  
  kkController = new KKController();
}

window["app"] = new App();
