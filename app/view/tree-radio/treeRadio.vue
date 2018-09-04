<template>
  <div>
    <div class="cont-main">
        <div class="breadcrumbStyle">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <div class="locationActive">注解：</div>
                <el-breadcrumb-item>elementUI的的树形控件，是多选的，但是需求为单选，并且父节点也可以选择，目前存在的问题(选择的框还是复选框，需换成单选框),
                  <br/><br/>实现原理：点击节点的时候判断是否选中复选框，并且判断选中的复选框是否为多个，如果为多个，就清空所有的选中，然后再让当前节点被选择，实现单选效果</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content-item">
          <el-tree class="treeStyle"
              :data="treeData"
              show-checkbox
              node-key="id"  
              :props="defaultProps"
              check-strictly
              @check-change="handleClick"
              default-expand-all="true"
              ref="treeForm"> 
          </el-tree>
          <div v-if="activeNode" style="margin-top:30px;color:#ccc;font-size:12px;margin-left:20px;">当前选中的节点：{{activeNode}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNode:'',
      i:0,
      treeData: [
        {
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }
      ],
    };
  },
  methods: {
    handleClick(data, checked, node) {
      this.i++;
      if (this.i % 2 == 0) {
        if (checked) {
          this.$refs.treeForm.setCheckedNodes([]);
          this.$refs.treeForm.setCheckedNodes([data]);
          //交叉点击节点
        } else {
          this.$refs.treeForm.setCheckedNodes([]);
          //点击已经选中的节点，置空
        }
      }
      this.activeNode = data.label; 
    },
  },

};
</script>
<style scoped>

</style>
