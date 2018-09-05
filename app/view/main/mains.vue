<template>
  <div>
    <Header></Header>
    <div class="cont-main">
      <!-- <el-row> -->
        <!-- <el-col :xs="9" :sm="7" :md="6" :lg="4" :xl="4"> -->
          <LefetMenu></LefetMenu>
        <!-- </el-col> -->
        <!-- <el-col :xs="15" :sm="17" :md="18" :lg="20" :xl="20" class="content"> -->
         <div class="content-item">
            <router-view></router-view>
         </div>
        <!-- </el-col> -->
      <!-- </el-row> -->
    </div>
  </div>
</template>

<script>
import Header from "@/components/menu/header";
import LefetMenu from "@/components/menu/lefetMenu";

export default {
  components: { Header, LefetMenu },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="stylus">
   @import "../../assets/css/public.styl"
</style>
