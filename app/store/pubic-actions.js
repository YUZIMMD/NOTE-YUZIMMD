import req from '@/assets/common/staticApi.js'
import router from '@/router'

export default{
  //登录
  logins:(context,md5)=>{

    let t = context.state.login
    // req.login(`username=${t.name}&password=${md5.hex(t.password)}&captcha=${t.verify}`).
    // then(data=>{
    //   context.state.user.roleId = data.object.user.roleId[0] 
    //   sessionStorage.roleId = data.object.user.roleId[0] 
    //   router.push({name:'mainstay'})
    // })
  },
  pagingTab:(context,val)=>{
    req.pagingTab(val).then(data=>{
      context.state.label_class_tree = data.list;
    })
  },
  classLabel_tree:(context)=>{
    req.categoryList().then(data=>{
      context.state.label_class_tree = data.list.map(el => {
          if(el.hasChildren)
            el.children = [''];

          return el
        });
        context.state.categoryId = data.list[0].id
        context.dispatch('label_table',{
          categoryId: context.state.categoryId,
          pageSize: context.state.label_manage_paging.number,
          pageIndex: context.state.label_manage_paging.index
        })
       
    })},
  initCategoryId:(context,item)=>{
    context.state.categoryId = item
  },
  label_table:(context,item)=>{
    req.labelTable(item).then(data=>{
      context.state.label_manage_table = data.page.records
      context.state.label_manage_paging.total = data.page.total
      context.state.label_manage_table.forEach(el => {
        for(let init of el.labelCategoryVos)
          el.className += `${init.parent ? init.parent +'>':''}${init.name}`
      });
    })
  },
  relationState:(context,item)=>{
    context.state.relationState = item.map(el=>{
      return {
        id: el.id,
        name: el.name
      }
    })
  },
  lalbel_dialog_states:(context,item)=>{
    context.state.lalbel_dialog_state = item.state;
    context.state.labelAlert = item.tab
    context.state.dialogTitle = item.title
  },
  label_handle:(context,item)=>{
    context.state.label_handle = item
  },
  iCharts:(context,item)=>{
    req.getLabelInfo(item).then(data=>{
      context.state.chartsInfo = data.object
    })
  }
}