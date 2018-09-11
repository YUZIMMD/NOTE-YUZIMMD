<template>
  <div>
    <div class="cont-main">
        <div class="breadcrumbStyle">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <div class="locationActive">注解：</div>
                <el-breadcrumb-item>异步-js实现异步的几种方式</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content-item">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalNum:0,
      curPage:1,
      pageSize:10 
    };
  },
  methods: {
   async dealWithAsync() {
        this.totalNum = await this.getListCount();
        console.log('Get count', this.totalNum);
        if (this.pageSize * (this.curPage - 1) > this.totalNum) {
            this.curPage = 1;
        }

        return this.getListData();
    },
    dealWithPromise() {
        return new Promise((resolve, reject) => {
            this.getListCount().then(res => {
            this.totalNum = res;
            console.log('Get count', res);
            if (this.pageSize * (this.curPage - 1) > this.totalNum) {
                this.curPage = 1;
            }

            return this.getListData()
            }).then(resolve).catch(reject);
        });
    },
    getListCount() {
        return this.createPromise(100).catch(() => {
            throw 'Get list count error';
        });
    },
    getListData() {
        return this.createPromise([], {
            curPage: this.curPage,
            pageSize: this.pageSize,
        }).catch(() => {
            throw 'Get list data error';
        });
    },
    createPromise(data,params = null,isSucceed = true,timeout = 1000,) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            isSucceed ? resolve(data) : reject(data);
            }, timeout);
        });
    },
    async A1() {
        let n1 = await 10;
        let n2 = await new Promise(resolve => {
            setTimeout(() => {
            resolve(10);
            }, 2000);
        });
        return n1 * n2;
    },
    async A2() {
        let n1 = await 10;
        let n2 = await new Promise((resolve, reject) => {
            setTimeout(() => {
            reject(10);
            }, 2000);
        });
        return n1 * n2;
    },
    async A11() {
        let n1 = await createPromise();
        console.log('N1', n1);
        let n2 = await createPromise();
        console.log('N2', n2);
        let n3 = await createPromise();
        console.log('N3', n3);
    },
    async A22() {
        for (let i = 0; i< 3; i++) {
            let n = await createPromise();
            console.log('N' + (i + 1), n);
        }
    },
    createPromise() {
        return new Promise(resolve => {
            setTimeout(() => {
            resolve(10);
            }, 1000);
        });
    }
  },
  mounted() {
    //   aysnc 和 promise
    //   this.dealWithPromise().then(res=>{
    //       console.log('get data',res);
    //   }).catch(err=>{
    //       console.log(err);
    //   })
    //   this.dealWithAsync().then(res=>{
    //       console.log('get data',res);
    //   }).catch(err=>{
    //       console.log(err);
    //   })
    // 
    //   this.A1().then(res => {
    //     console.log('执行成功', res); // 约两秒后输出100。
    //   });
    //   this.A2().catch(err => {
    //     console.log('执行失败', err); // 约两秒后输出10。
    //   });
    // generator
    
    
  },
};
</script>
<style scoped>

</style>
