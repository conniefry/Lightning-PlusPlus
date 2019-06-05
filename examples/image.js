export default class MyApp extends lng.Application {
   static _template() {
    return {
      Image: { src:"./images/ball.png"}
    }
  }
  _handleLeft() {
    console.log("Inside LEFT>")
  }
  _handleRight() {
      console.log("Inside RIGHT")
  }
  _init(){
    console.log("Inside INIT")
  }  
    
}