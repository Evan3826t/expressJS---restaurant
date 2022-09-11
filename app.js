// 引入 library
const express = require('express');
// express 引入的是一個 function
const app = express();
const exphbs = require('express-handlebars');
// 建立一個不易產生衝突的 port 用來測試
const port = 5001;
// 設定 view engine
// app.set('view engine', 'ejs')

// // 如何處理不同的 request，參數分別為 url 和要執行的 function
// app.get('/', (req, res) => {
//   res.send('hello world!')
// })

// app.get('/bye', (req, res) => {
//   res.send('bye!')
// })

// app.get('/hello', (req, res) => {
//     // 叫 express 去 render views 底下叫做 hello 的檔案，副檔名可省略
//   res.render('hello')
// })

// setting template engine
// app.engine('handlebars', exphbs('defaultLayout: main'))
app.engine('.handlebars', exphbs.engine({ extname: '.handlebars', defaultLayout: "main"}));
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// import restaurant.json
const restaurant_list = require('./restaurant.json')
app.get('/', (req, res) => {
  res.render('index', { restaurantList: restaurant_list.results })
})
// route setting for show: using params
app.get('/restaurants/:id', (req, res) => {
  console.log(req.params.id)
})
// 運行這個 port，參數分別為 port 和要執行的 function
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
