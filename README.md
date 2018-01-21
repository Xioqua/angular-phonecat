# 项目说明

<del>[angularjs1.4.6的教程](https://code.angularjs.org/1.4.6/docs/tutorial/step_00),使用git做目录可以保存文件更改历史,以便复用学习。<del>，已更改为与官网相同的1.5+，因为在学习当中发现有语法不支持。

纵然angularjs已经严重过时,但其中的思想也够我等传统前端好好品味。这将是我入门现代化前端的第一站。

## 文件结构

> 基于[第19条commit](https://github.com/Xioqua/angular-phonecat/tree/646a72e153f740fdeccc625dda100bddd2ed5662)

```md
- img
    - phones     # 当图片类别比较多时分下类比较好
        - ...png/jpg/...
- json
    - xxx.json   # 数据文件,可能数据是从后台读数据库传进来的结果又需要整改结构
- css            # 存放与index.html相关的样式文件
    - bootstrap.css
    - app.css    # 因为是单页应用所有样式放一个文件里也可以，如果配合sass结构需整改
- js             # 根目录的js文件,可存放angular,bootstrap等各种js文件，这些是与整个单页应用相关的
    - angular.js # 注: angular版本更迭过快,如果某个报错解决不了试试换换版本
- phone-list     # 组件or模块?
    - phone-list.module.js     # 模块定义
    - phone-list.component.js  # 组件
    - phone-list.template.html # 模板
- index.html     # 模板
- app.moudule.js # 模块依赖关系在这定义
- README.md      # 说明文档，帮助别人认识这个项目
- .gitignore     # 不提交到git的文件集
```

## 使用工具

- vscode
    - gitignore
    - git history diff
    - live Server
    - Path Intellisense