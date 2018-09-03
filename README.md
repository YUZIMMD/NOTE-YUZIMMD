NOTE:YUZIMMD的个人学习笔记


一个相对完善的框架，vue,vue-router,vueX,elementUI.......webpack按照开发和生产环境分别做了配置

框架目录：

    app                ------------------------ 项目包

        assets                      ----------- 静态资源文件

        component                   ----------- 公共组件

        config                      ----------- 接口请求配置

        router                      ----------- 路由文件

        store                       ----------- vueX文件

        view                        ----------- 页面组件

        App.vue                     ----------- 根组件

        index.html                  ----------- 根html

    config            ------------------------- webpack详细配置

    .babelrc          ------------------------- .babelrc文件

    .gitignore        ------------------------- Git提交忽略文件

    README.md         ------------------------- 项目说明

    package.json      ------------------------- 项目架构json文件

    webpack.config.js ------------------------- webpack基础配置


项目开始

git clone 后 npm install 安装依赖包进行开发

npm start 启项目

npm build 生产环境包

npm run dev 开发环境包


