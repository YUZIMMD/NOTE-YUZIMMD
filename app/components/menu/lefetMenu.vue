<template>
  <div class="left_menu">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="showMenu"
      :unique-opened="true">
      <el-submenu v-for="(item,i) in leftMenu" :title="i"
      :class="item.children.length ? '':'hide_icon'"
      :index="JSON.stringify(i)" :key="i">
         <template slot="title">
            <router-link :to="{name:item.name}">{{item.title}}</router-link>
        </template>
        <el-menu-item v-if="item.children" v-for="(now,j) in item.children" 
          :index="JSON.stringify( i + '-' + j)" :key="j">
          <router-link :to="{name:now.name}"> {{now.title}}</router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default{
    data(){
      return{}
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
    background-color: #25364f;
    border: none;
  }
  .el-submenu__title *{
    color: #ffffff;
  }
  .el-menu-item *{
    color: #ffffff;
  }
</style>
