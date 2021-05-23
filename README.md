# 天气预报Web App

体验链接：[天气预报](http://42.194.221.68:9201)

*请用手机打开*

## 开发平台

Lubuntu 20.04操作系统，Node.js 10.19.0版本。

## 构建方法

确保本机已安装Node.js并配置好Node.js和npm的环境变量。

```bash
# 修改下载源
npm config set registry https://registry.npm.taobao.org

# 安装yarn
npm install -g yarn

# 安装依赖包
yarn

# 启动开发服务器
npm run start
# 之后浏览器打开：http://localhost:9999

# 或者构建项目
npm run build
# 之后用浏览器打开dist文件夹中的index.html
```

## 项目结构

```
.
├── dist                        -- 项目打包后的目录
│   ├── favicon.png
│   ├── index.css
│   ├── index.html
│   ├── index.js
│   └── index.js.LICENSE.txt
├── index.html                  
├── package.json                -- 项目信息、依赖描述文件
├── README.en.md
├── README.md
├── server                      -- 用于请求时处理跨域的中间件
│   ├── city-api-util.js
│   ├── dist                    -- 打包后的目录，已部署至云服务器
│   │   ├── server.js
│   │   └── server.js.LICENSE.txt
│   ├── index.js
│   ├── package.json
│   ├── webpack.config.js
│   └── yarn.lock
├── src                         -- 项目源码
│   ├── assets
│   │   └── favicon.png
│   ├── components
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── city
│   │   │   ├── city-code.json
│   │   │   ├── city-common.js
│   │   │   ├── city-manage
│   │   │   │   ├── city-manage.css
│   │   │   │   └── city-manage.js
│   │   │   ├── city-select
│   │   │   │   ├── city-select.css
│   │   │   │   └── city-select.js
│   │   │   └── popular-cities
│   │   │       ├── popular-cities.css
│   │   │       ├── popular-cities.js
│   │   │       └── popular-cities.json
│   │   ├── main
│   │   │   ├── main.js
│   │   │   ├── temperature-7days
│   │   │   │   ├── temperature-7days.css
│   │   │   │   └── temperature-7days.js
│   │   │   ├── temperature-details
│   │   │   │   ├── temperature-details.css
│   │   │   │   └── temperature-details.js
│   │   │   ├── temperature-head
│   │   │   │   ├── temperature-head.css
│   │   │   │   └── temperature-head.js
│   │   │   ├── temperature-hours
│   │   │   │   ├── temperature-hours.css
│   │   │   │   └── temperature-hours.js
│   │   │   └── weather-icon.js
│   │   ├── navbar
│   │   │   ├── navbar.css
│   │   │   └── navbar.js
│   │   └── svg-icon
│   │       └── svg-icon.js
│   ├── index.js
│   └── test
│       └── fakedatas.js
├── webpack.config.js           -- Webpack配置文件             
└── yarn.lock
```
