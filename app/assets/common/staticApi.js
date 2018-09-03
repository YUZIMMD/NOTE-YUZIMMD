import { iHttp } from "@/config/http.js";

export default {
  categoryList:(item = {})=>
    iHttp('get',`/label/category/list`,item).then(data=>data.data),
  labelTable:(item = {})=>
    iHttp('get',`/label/list`,item).then(data=>data.data),
  addLabel:(item)=>
    iHttp('post',`/label/add`,item).then(data=>data),
  getLabelClass:()=>
    iHttp('get',`/label/category/list/all`).then(data=>data.data),
  postLabelrelation:(item)=>
    iHttp('post',`/label/edit/relation/${item.id}`,item.list).then(data=>data),
  getLabelInfo:(item)=>
    iHttp('get',`/label/detail/${item}`).then(data=>data.data),
  postLabelInfo:(item)=>
    iHttp('post',`/label/edit`,item).then(data=>data.data),
  deleteLabel:(item)=>
    iHttp('post',`/label/delete`,item).then(data=>data.data),
  exportFile:()=>
    iHttp('get',`/label/export`).then(data=>data),
  };
