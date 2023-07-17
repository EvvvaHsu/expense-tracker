# 廣志的私房錢

## 專案畫面

![image](https://github.com/EvvvaHsu/expense-tracker/blob/d81e37d3af310b1883d0fcb0ab933916b42e4580/public/images/login-page.png)

![image](https://github.com/EvvvaHsu/expense-tracker/blob/d81e37d3af310b1883d0fcb0ab933916b42e4580/public/images/home-page.png)

## Features - 產品功能

1. 使用者可以選擇自行建立帳號及密碼，或是透過 facebook 進行帳號登入及註冊
2. 使用者可以根據類別建立支出項目，並透過類別進行篩選
3. 使用者可以修改並刪除建立的支出項目

## Environment SetUp - 環境建置

![Static Badge](https://img.shields.io/badge/Node.js-14.16.0-red.svg)
![Static Badge](https://img.shields.io/badge/bcryptjs-2.4.3-red.svg)
![Static Badge](https://img.shields.io/badge/body--parser-1.20.2-red.svg)
![Static Badge](https://img.shields.io/badge/connect--flash-0.1.1-red.svg)
![Static Badge](https://img.shields.io/badge/express-4.18.2-red.svg)
![Static Badge](https://img.shields.io/badge/express--handlebars-3.0.0-red.svg)
![Static Badge](https://img.shields.io/badge/express--session-1.17.1-red.svg)
![Static Badge](https://img.shields.io/badge/handlebars-4.7.7-red.svg)
![Static Badge](https://img.shields.io/badge/handlebars--dateformat-1.1.3-red.svg)
![Static Badge](https://img.shields.io/badge/method--override-3.0.0-red.svg)
![Static Badge](https://img.shields.io/badge/mongoose-5.9.7-red.svg)
![Static Badge](https://img.shields.io/badge/passport--facebook-3.0.0-red.svg)
![Static Badge](https://img.shields.io/badge/passport--local-1.0.0-red.svg)
![Static Badge](https://img.shields.io/badge/dotenv-16.3.1-red.svg)

## Installing - 專案安裝流程

1. 打開 terminal，clone 此專案至本機電腦，並 cd 至此專案

```
git clone https://github.com/EvvvaHsu/expense-tracker.git
```

2. 安裝 npm 套件

```
在 Terminal 輸入 npm install 指令
```

3. 修改環境參數，將 .env.example 檔案修改為自己的 key

4. 執行種子資料到 Mongodb 資料庫 (請先確認有安裝 nodemon)

```
npm run seed
```

5. 啟動伺服器，執行 app.js 檔案啟動專案

```
npm run dev
```

現在，開啟任一瀏覽器瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 即可使用網站

## Contributor - 專案開發人員

> [Eva Hsu](https://github.com/EvvvaHsu)
