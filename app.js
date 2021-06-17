// lock.json >> 최적화된 모듈들의 버전이 나옴
const express = require("express");
const app = express(); // nunjucks -> configure
const http = require("http");
const port = process.env.PORT || 6530;
const logger = require("morgan");

app.set('port', port);

// view setting -> template > views

const nunjucks = require("nunjucks");

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// 미들웨어 셋팅
app.use(logger('dev'));
// 여기서 미들웨어 만들어놓고 app.use('/~', 미들웨어, 라우터)
// 이렇게하면 라우터 거치기 전에 먼저 app이 체크하므로 미들웨어가 최우선이됨

// Router
let indexRouter = require("./routes/index.js");
let userRouter = require("./routes/user.js");
let adminRouter = require("./routes/admin.js");

app.use('/', indexRouter);
app.use('/', userRouter);
app.use('/', adminRouter);
// Server status Setting
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
// Server listen
app.listen(app.get('port'), function () {
    console.log("server is working on " + app.get('port'));
})
