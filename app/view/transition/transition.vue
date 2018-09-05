<template>
  <div>
    <div class="cont-main">
        <div class="breadcrumbStyle">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <div class="locationActive">注解：</div>
                <el-breadcrumb-item>transition过渡效果实现轮播图,轮播图根据当前显示的来决定从左边进入还是从右边进入</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content-item">
          <div class="outNode">
            <transition-group :name="name" tag="ul">
              <div v-for="(i,inx) in imageNode" :key="inx" class="imageBox" :style='{backgroundColor:i}' v-show="index == inx?true:false"></div>
            </transition-group>
            <ol class="selectNode" :style='{width:imageNode.length*14+"px"}'>
              <li v-for="(i,inx) in imageNode" :key="inx" :class='index==inx?"active":""' @click="add(inx)"></li>
            </ol>  
          </div> 
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
       imageNode:['#000','#ccc','pink','#aaa'],
       index:0,
       name:'leo'
    };
  },
  methods: {
   add(needInx){
       needInx>this.index?this.name='leo':this.name='left'
       this.index = needInx;
   }
  },

};
</script>
<style scoped>
.outNode{
  width: 520px;
  height: 280px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 1px solid #000;
  background-color: #000;
  overflow: hidden;
}
.imageBox{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.selectNode{
  height: 13px;
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 15px;
  border-radius:6.5px; 
  z-index: 10
}
.selectNode li{
  width: 8px;
  height: 8px;
  background-color: #FFF;
  border-radius:50%;
  cursor: pointer; 
  margin-top: 2.5px;
  margin-left: 3px;
  margin-right: 3px;
  float: left;
}
.selectNode li:active,.selectNode .active{
  background-color: #fe5001;
}
.leo-enter-active{
   transform: translateX(0);
   transition: all 1s ease;
}
.leo-leave-active{
  transform: translateX(-100%);
  transition: all 1s ease;
}
.leo-enter{
  transform: translateX(100%);
}
.leo-leave{
  transform: translateX(0);
}
.left-enter-active{
   transform: translateX(0);
   transition: all 1s ease;
}
.left-leave-active{
  transform: translateX(100%);
  transition: all 1s ease;
}
.left-enter{
  transform: translateX(0);
}
.left-leave{
  transform: translateX(0);
}
</style>
