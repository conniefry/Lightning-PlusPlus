export default class MyApp extends lng.Application {
   static _template() {
    return {
      Rect: { rect:true, color: 0xff005500, w: 900, h: 200}
    }
  }
  _handleLeft() {
    console.log("Inside LEFT>")
    this.tag('Rect').setSmooth('w', this.tag('Rect').getSmooth('w') - 50)
  }
  _handleRight() {
      console.log("Inside RIGHT")
      this.tag('Rect').setSmooth('w', this.tag('Rect').getSmooth('w') + 50)
  }
  _init(){
    console.log("Inside INIT")
    this.tag('Rect').w = 300
  }  
    
}