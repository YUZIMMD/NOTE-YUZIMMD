<template>
  <div id="iLogin">
    <header>
      <h3>政务大数据共享交换平台</h3>
    </header>
    <div class="Content">
      <aside class="T-algin-c">
      </aside>
      <el-form ref="login" :model="login" :rules="MessageL">
        <el-form-item label="用户名" prop="name" label-width="80px" class="userName_font">
          <el-input v-model="login.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" label-width="80px" class="password_font_algin">
          <el-input type="password" v-model="login.password"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="verify" label-width="80px" class="userName_font">
          <el-row>
            <el-col :span="12">
              <el-input v-model="login.verify"></el-input>
            </el-col>
            <el-col :span="12">
              <img :src="verify_img"  alt="点击刷新图片" class="login_verify" @click="updated_verify"/>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('login')" class="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import req from "@/config/api";

export default {
  data() {
    var aa;

    return {
      verify_img: `${req.api2}/captcha.jpg`,
      MessageL: {
        name: [{ required: true, message: "用户名不能为空!", trigger: "blur" }],
        password: [
          { required: true, message: "密码不能为空!", trigger: "blur" },
          { type: "string", min: 6, message: "密码长度不能小于六位！" }
        ],
        verify: [
          { required: true, message: "验证码不能为空！", trigger: "blur" },
          { type: "string", min: 5, message: "验证码不低于5个字符！" }
        ]
      }
    };
  },
  methods: {
    ...mapActions(["logins"]),
    submitForm(name) {
      this.$refs[name].validate(valid => {
        // if (valid) this.$store.dispatch("logins", new Hashes.MD5());
        // else this.$message.error("用户名或者密码格式错误!");
      });
    },
    updated_verify() {
      this.verify_img = "";
      let This = this;
      setTimeout(() => {
        This.verify_img = `${req.api2}/captcha.jpg`;
      }, 51);
    }
  },
  computed: {
    ...mapState(["login"])
  }
};
</script>
