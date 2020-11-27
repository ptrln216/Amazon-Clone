# 基於 React 的全端 Amazon Clone 網站

項目預覽地址：[https://agile-escarpment-11383.herokuapp.com/](https://agile-escarpment-11383.herokuapp.com/)



## 技術棧：

- React
- React Router
- axios
- material-ui
- Node
- Express
- Firebase + Firestore ( 數據庫 ) + Authentication ( 登錄註冊 )
- Stripe ( 支付 )



## 實現的功能

### 首頁

- [x] 首頁
- [x] 頂部輪播圖

### 登錄註冊

- [x] 登錄頁面

- [x] 登入登出 ( 第三方服務 firebase Authentication )
- [x] 郵箱密碼註冊 ( 第三方服務 firebase Authentication )

### 購物車

- [x] 購物車頁面
- [x] 添加商品到購物車
- [x] 從購物車移除商品

### 結算

- [x] 結算頁面
- [x] 用銀行卡支付 ( 第三方服務 stripe )
- [x] 訂單頁面

### 導航

- [x] 導航守衛，沒有登入不能通過鏈接訪問部分頁面

### 特效

- [x] 商品鼠標懸浮放大特效
- [ ] ~~移除商品時的滑動過渡特效~~



## 項目截圖

### 首頁

![](https://cdn.jsdelivr.net/gh/ptrln216/HexoStaticFile@0b18f64f830061d70cddc7f0e228a60d5fd86b14/2020/11/27/b5148eb1875639f76b26cad696d5a1ec.png)

### 登錄註冊頁面

![](https://cdn.jsdelivr.net/gh/ptrln216/HexoStaticFile@482f628ec51ed1d0e6b066e6c6e49d33f25abe47/2020/11/27/fa2dfd50c6112353898723f73eb929fb.png)

### 購物車頁面

![](https://cdn.jsdelivr.net/gh/ptrln216/HexoStaticFile@ea2019691a274eff4b7a2a602840469698a5ff42/2020/11/27/391e08cdef00f8141e34e29860e8abb6.png)

### 結算頁面

![](https://cdn.jsdelivr.net/gh/ptrln216/HexoStaticFile@73ac50d4fea5a5360f974a91b97116b4b62deb90/2020/11/27/13ee0636a32209a5c67a2f7098e991a7.png)

### 訂單詳情頁面

![](https://cdn.jsdelivr.net/gh/ptrln216/HexoStaticFile@32cc139feb42db848b65db18e2c094be6d782ff6/2020/11/27/7d5178409b13ddbfd10b0f23e37ba911.png)



## Dev Setup

### 運行前端

在目錄 /front-end/ 下`npm start`

### 運行後端

在根目錄 amazon-clone/ 下 `npm run start` 普通啟動

要開啟 hot-reload 實時更新 ( 使用 nodemon ) 的話 `npm run dev`



## Build Setup 部署

使用 heroku 部署，之前用過體驗還不錯，就算不翻牆也能正常訪問。

> Heroku 是一個可以部署 Node.js App 的平台

### 如何部署

```bash
git add updated_file
git commit -m "xxx"
git push heroku master
```



## 遇到的問題

### Firebase Login驗證失敗

解決方法參考這篇文章 [Unable to deploy behind a proxy #155](https://github.com/firebase/firebase-tools/issues/155)

### 部署時遇到困難

#### 原因

起初想部署到 Firebase 上，因為 Firebase 有一套完整的服務，包括 Authentication, Functions, Firestore, Hosting 等，涵蓋了我要用的所有功能 ( 部署、數據庫、登錄註冊)。

但部署到 Firebase 上很快發現，首先不翻牆不行，其次很不穩定，經常訪問不了。

加之 Functions 功能必須填寫信用卡，切換成付費方案，所以放棄了部署到 Firebase 上的想法。

#### 解決方案

之前練習 Vue + Express 的時候部署到 Heroku 過，體驗還不錯，很穩定也不需要翻牆就能訪問，所以就回頭看之前的代碼，**思路如下：**

1. 把前端部分 build 到 server/public 下，這步需要修改 Create React App 的配置文件，要用到 `npm run eject` 命令。
2. Heroku 可以用來部署 Node.js App，所以我們只部署 server 文件夾，/server/public 下有構建好的靜態網頁。別忘了在 .gitignore 文件中要添加前端 front-end 文件夾，以及 node_modules 文件夾，我們不需要部署這些。

> 提示：`npm run eject` 前要先創建倉庫，否則會報錯
>
> ``` bash
> git init
> git add .
> git commit -m "Saving before eject"
> ```
>
> 完成後，就可以進入 path.js 文件修改配置，讓前端部分在`npm run build`後生成到 server/public 下

