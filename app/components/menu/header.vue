<template>
  <header class="header_menu">
    <el-row class="header_sub_row">
      <el-col :xs="9" :sm="7" :md="6" :lg="4" :xl="4">
        <div class="headTitle">
          <!-- <img :src='systemIcon' alt=""  class="header_icon"/> -->
          <span class="headerTitle"><h4>NOTE</h4></span>
        </div>
      </el-col>
      <el-col  :xs="15" :sm="17" :md="18" :lg="20" :xl="20">
        <el-row>
          <el-col :xs="22" :sm="21" :md="20" :lg="20" :xl="29" >
            &nbsp;
          </el-col>
          <el-col :xs="2" :sm="3" :md="4" :lg="4" :xl="5" class="text-a-c">
              <el-badge is-dot class="item">
              </el-badge>
             <img :src="userIncons" alt="" class="userInconsStyle"/>
            <el-dropdown>
              <span class="el-dropdown-link">
              <span class="userTitle">{{user.userName}}<i class="el-icon-caret-bottom"></i></span>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">
                    <i class="el-icon-message"></i>
                    <span class="m-l-xs">消息</span>
                    <span class="badgeStyle">{{user.emailNumber}}</span>
                </el-dropdown-item>
                <el-dropdown-item command="b">
                   <!-- <img :src="exitIcon" alt='' class="userExit"/> -->
                   <span class="userTitle" @click="exits"> 退出</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row> 
      </el-col>
    </el-row>
  </header>
</template>
<script>
  import { mapState } from 'vuex'
  import headerIcon from '@/assets/image/u181.png'
  import lIcon from '@/assets/image/u77.png'
  import sysMuneDown from '@/assets/image/sysMuneIcon.png'
  import mIcon from '@/assets/image/u66.png'
  import userIncon from '@/assets/image/u72.png'
  import exit from '@/assets/image/u213.png'

  export default{
    name:'headers',
    data(){
      return{
        systemIcon:headerIcon,
        systemIconMenu:sysMuneDown,
        localIcon:lIcon,
        emailIcon:mIcon,
        userIncons:userIncon,
        exitIcon: exit
      }
    },
    methods:{
      exits(){
        sessionStorage.removeItem('roleId');

        this.$router.push({name:'login'})
      }
    },
    computed:{
      ...mapState(['user'])
    }
  }
  
</script>