/**
 * Created by Administrator on 2017/5/25.
 */
export  class PatternModel{
  account:string;

  constructor() {
    this.account = "[a-zA-Z]\w{5,13}";
  }
}
