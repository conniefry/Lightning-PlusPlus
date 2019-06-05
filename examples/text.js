export default class MyApp extends lng.Application {
   static _template() {
    return {
      Text: {  color:"0xFF0000FF", text: {text: "hello world" }}
    }
  }
  _handleLeft() {
    console.log("Inside LEFT>")
    this.tag('Text').patch({text: {text:"Got a LEFT arrow!"}});
  }
  _handleRight() {
      console.log("Inside RIGHT")
      this.tag('Text').patch({text: {text:"Got a RIGHT arrow!"}});
  }
  _handleUp() {
    console.log("Inside Up")
    this.tag('Text').patch({text: {text:"hello world"}});
}
  _init(){
    console.log("Inside INIT")
  }  
    
}