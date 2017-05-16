/**
 * Created by deng on 2017/5/16.
 */
var gulp=require("gulp");
var $=require('gulp-load-plugins')();
var open=require('open');
var app={
    srcPath:'src/',
    devPath:'build/',
    prdPath:"dist/"
};
gulp.task('lib',function(){
    gulp.src('bowwe_components/**/*.js')
        .pipe(gulp.dest(app.devPath+'vendor'))
        .pipe(gulp.dest(app.prdPath+'vendor'))
});
gulp.task('html',function(){
    gulp.src(app.srcPath+'/**/*.html')
        .pipe(gulp.dest(app.devPath))
        .pipe(gulp.dest(app.prdPath))
});
gulp.task('json',function(){
    gulp.src(app.srcPath+'data/**/*.json')
        .pipe(gulp.dest(app.devPath+'data'))
        .pipe(gulp.dest(app.prdPath+'data'))
});
gulp.task('less',function(){
    gulp.src(app.srcPath+'style/index.less')
        .pipe($.less())
        .pipe(gulp.dest(app.devPath+'css'))
        .pipe($.cssmin())
        .pipe(gulp.dest(app.prdPath+'css'))
})
gulp.task('js',function(){
    gulp.src(app.srcPath+'srcipt/**/*.js')
        .pipe($.concat('index.js'))
        .pipe(gulp.dest(app.devPath+'js'))

        .pipe($.uglify())
        .pipe(gulp.dest(app.prdPath+'js'))
});