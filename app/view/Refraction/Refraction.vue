<template>
  <div>
    <div class="cont-main">
        <div class="breadcrumbStyle">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <div class="locationActive">注解：</div>
                <el-breadcrumb-item>鼠标移动，通过控制阴影效果来实现光线的特效</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content-item">
          <div id="box" v-shadow></div>
          <div id="box2" v-shadow></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    // 规律总结：根据鼠标动。改变的是box-shadow的xy，xy根据鼠标的clientX和clientY 去移动
    //x = 30的时候，clientX等于0，鼠标在最左边，当x=-30的时候。鼠标在最右边。
    //y = 30的时候，clientY等于0，鼠标在最上边，当y=-30的时候。鼠标在最下边。
  },
  // 自定义指令
 directives:{
   shadow(el){
     document.addEventListener('mousemove' , (e)=>{
       var ev = e || event;
      //  计算当前宽高和当前鼠标位置的百分比，来计算阴影的xy的大小 百分比y = 1的时候 ，鼠标在最下方 ，shadowY = -30，百分比y=0的时候，鼠标在最上方，shadowY等于30
      //  计算当前宽高和当前鼠标位置的百分比，来计算阴影的xy的大小 百分比x = 1的时候 ，鼠标在最右方 ，shadowX = -30，百分比x=0的时候，鼠标在最左方，shadowX等于30
       var needY = ev.clientY/innerHeight;
       var needX = ev.clientX/innerWidth;
       el.style.boxShadow = (30-60*needX)+'px '+(30-60*needY)+'px 30px 0px black';
       console.log(needY,needX);
     });
   }
 }
};
</script>
<style scoped>
#box{
  width: 200px;
  height: 200px;
  border:1px solid black;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -100px 0 0 -100px;
}
#box2{
  width: 100px;
  height: 100px;
  border:1px solid black;
  position: absolute;
  left: 30%;
  top: 50%;
  margin: -100px 0 0 -100px;
}
</style>
