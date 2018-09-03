import { Message } from "element-ui";
import req from '@/assets/common/staticApi.js'

export let testClass=(item)=>{
  let init = true;
  if(item.length){
    item.forEach(el => {
      if(el.id ==''){
        Message.error('分类名称不能为空！');
        init = false
      }
    });
  }else{
    Message.error('所属分类不能为空！');
    init = false
  }
  return init
}

export let testrelation=(item)=>{
  let init = true
    if(item.length){
      item.forEach(el => {
        if(el.id == '' || el.relation ==''){
          Message.error('标签名称或者关系不能为空！');
          init = false
        }
      });
    }else{
      init = false;
    }
    return init
}

export let deleteLable=()=>{

}

export let exportFile=()=>
          req.exportFile()