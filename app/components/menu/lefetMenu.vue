<template>
  <div class="left_menu">
    <!-- 展开折叠开关 -->
    <div class="menu-toggle"  @click.prevent="isCollapse = !isCollapse">
      <i class="el-icon-document" v-show="!isCollapse" title="收起"></i>
      <i class="el-icon-tickets" v-show="isCollapse" title="展开"></i>
    </div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="showMenu"
      :collapse="isCollapse"
      :unique-opened="true"
      router>
      <template v-for="(item,i) in leftMenu">
        <el-submenu v-if="item.children.length"
        :class="item.children.length ? '':'hide_icon'"
        :index="JSON.stringify(i)" :key="i">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">{{item.title}}</span>
          </template>
          <el-menu-item v-for="(now,j) in item.children" 
            :index="now.name" :key="j">
            <span slot="title">{{now.title}}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="'/'+item.name" v-else :key="i+1">
          <i class="el-icon-setting"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default{
    data(){
      return{
        isCollapse:false
      }
    },
    methods:{
      showMenu(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed:{
      ...mapState(['leftMenu'])
    }
  }
  
</script>
<style scope>
  .el-dropdown-menu__item--divided:before, .el-menu, .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
    background-color: #000;
    border: none;
  }
  .el-submenu__title *{
    color: #ffffff;
  }
  .el-menu-item *{
    color: #ffffff;
  }
  .left_menu{
    width: auto;
  }
  .menu-toggle{
    background: #4A5064;
    text-align: center;
    color: #e41d60;
    height: 26px;
    line-height: 30px;
  }
</style>
