/**
 * Created by Administrator on 2017/5/27.
 */
export class MenuItemModel{

  img:string;
  text:string;
  activated:boolean;
  index:number;
  nav:string;

  constructor(img: string, text: string, activated: boolean, index: number, nav: string) {
    this.img = img;
    this.text = text;
    this.activated = activated;
    this.index = index;
    this.nav = nav;
  }
}
