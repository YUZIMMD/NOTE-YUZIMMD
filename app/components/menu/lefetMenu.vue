<template>
  <div class="left_menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#25364f"
      text-color="#fff"
      active-text-color="#ffd04b">
      <!-- 有子菜单的菜单 -->
      <el-submenu index="inx" v-for="(val,inx) in leftMenu" :key="inx">
        <template slot="title">
          <i class="el-icon-location" v-if="0"></i>
          <span><router-link :to="val.name">{{val.title}}</router-link></span>
        </template>
        <el-menu-item-group v-if="val.children">
          <!-- 子菜单 -->
          <el-menu-item :index="inx-inxC" v-for="(valC,inxC) in val.children" :key="inxC"><router-link :to="valC.name">{{valC.title}}</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default{
    data(){
       return {
      };
    },
    methods:{
     
    },
    computed:{
      ...mapState(['leftMenu'])
    }
  }
  
</script>
<style scope>
  .el-submenu__title a,.router-link-exact-active{
    color:#fff;
  }
  .el-menu{
    border: none;
  }
  .el-menu-item-group__title{
      display: none;
  }
  .el-submenu .el-menu-item{
    height: 30px;
    line-height: 30px;
  }
</style>
