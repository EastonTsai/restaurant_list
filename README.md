# 一個搜集美食餐廳的網站    
可以搜尋及查看相關餐廳的電話, 地址及介紹  

## 網站功能 :
使用者可以...
- 在首頁查看所有餐廳清單介紹
- 點擊單一餐廳查看詳細介紹
- 輸入關鍵字搜尋符合的餐廳名稱或餐廳類型
- 由詳細介紹頁面中的地址連接 google map 地圖
- 當沒有符合搜尋項目時 , 隨機推薦 3 家餐廳  

## 專案開發環境
- node.js
- express 框架
- express-handlebars 模板引擎

## 專案使用方法
**請於你的電腦中先行下載安裝 Git 及 node.js 後開啟 " 終端機 terminal " 進行下列步驟**  

1.下載此專案至你的電腦  
```
$ git clone "https://github.com/EastonTsai/restaurants_list.git"
```
2.把執行位置移到你的電腦中的 restaurant_list 的位置  
```
$ cd .../restaurant_list
```
3.安裝 expree  
```
$npm -i express@4.16.4
```
4.安裝 express-handlebars  
```
$ npm -i express-handlebars@3.0.0
```
5.安裝 nodemon  
```
$ npm -i nodemon
```
6.使用 nodemon 執行 app.js
```
$ nodemon app.js
```
