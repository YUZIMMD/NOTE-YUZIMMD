<template>
  <div>
    <div class="cont-main">
        <div class="breadcrumbStyle">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <div class="locationActive">注解：</div>
                <el-breadcrumb-item>全选按钮</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content-item">
          <table>
              <thead>
              <tr>
                  <th>
                      <label class="i-checks i-checks-sm"><input id="isAllCk" type="checkbox" name="status" style="display: none;" :checked="deleteIDS.length === dataList.length" @click="checkALL()"> <i></i></label>
                  </th>
                  <th>操作</th>
                  <th>人员编码</th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>学历</th>
                  <th>学位</th>
                  <th>专业</th>
                  <th>公司名称</th>
                  <th>任职部门</th>
                  <th>登记人</th>
                  <th>在职状态</th>
                  <th>首次登记时间</th>
                  <th>最近更新时间</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item,index) in dataList" :key="index">
                  <td><label class="i-checks i-checks-sm"><input type="checkbox" name="status" style="display: none;" :checked="deleteIDS.indexOf(item.id)>=0" @click="checkNames(item.id)"> <i></i></label></td>
                  <td><a :href="'management-add.html?id='+item.id+'&&status='+item.status">{{item.status==1?'查看':'草稿'}}</a></td>
                  <td>{{item.personnelCode}}</td>
                  <td>{{item.staffName}}</td>
                  <td>{{item.sexStr?'女':'男'}}</td>
                  <td>{{item.education}}</td>
                  <td>{{item.academicDegree}}</td>
                  <td>{{item.major}}</td>
                  <td>{{item.companyName}}</td>
                  <td>{{item.department}}</td>
                  <td>{{item.personnelCode}}</td>
                  <td>{{item.jobStatusStr}}</td>
                  <td>{{item.createTimeStr}}</td>
                  <td>{{item.updateTimeStr}}</td>
              </tr>
              </tbody>
          </table>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
            dataList:[{
              status:1,
              id:1,
              personnelCode:'测试',
              staffName:'测试',
              sexStr:0,
              education:'测试',
              academicDegree:'测试',
              major:'测试',
              companyName:'测试',
              department:'测试',
              personnelCode:'测试',
              jobStatusStr:'测试',
              createTimeStr:'测试',
              updateTimeStr:'测试'
            }],
            deleteIDS:[],
            isCheckedAll:false
    };
  },
  methods:{
    checkALL:function () {
        var $this = this;
        $this.isCheckedAll = !$this.isCheckedAll;
        if ($this.isCheckedAll) {
            // 全选时
            $this.deleteIDS = [];
            $this.dataList.forEach(function (value) {
                $this.deleteIDS.push(value.id);
            }, this)
        } else {
            $this.deleteIDS = []
        }
    },
    checkNames:function (id) {
        var idIndex = this.deleteIDS.indexOf(id);
        if (idIndex >= 0) {
            this.deleteIDS.splice(idIndex, 1)
        } else {
            this.deleteIDS.push(id);
        }
    },
  },
  mounted() {
    
  },
};
</script>
<style scoped>

</style>
