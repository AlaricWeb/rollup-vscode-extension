# 使用typescript
## @rollup/plugin-typescript
1. package.json
![Alt text](media/image-1.png)
2. rollup.config.ts
![Alt text](media/image.png)
## @rollup/plugin-commonjs
1. 默认lodash没有被打包是因为它使用commonjs, rollup默认情况下只会处理es module
2. 解决commonjs导出，es module导入
```cmd
npm install @rollup/plugin-commonjs -D
```
# 解决node_modules的问题
##  @rollup/plugin-node-resolve 
1. rollup 并不支持直接打包 node-modules 里面的内容，所以需要安装 rollup-plugin-node-resolve 插件
npm install @rollup/plugin-node-resolve -D

# 安装 @types/vscode