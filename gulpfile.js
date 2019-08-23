let gulp = require('gulp'), //Сам gulp
    sass = require('gulp-sass'), //Модуль для преобразования sass в css
    rename = require('gulp-rename'), //Модуль для переименования файлов
    htmlMin = require('gulp-htmlmin'), //Модуль для минификации html
    delFiles = require('del'), //Удаление файлов
    cleanCSS = require('gulp-clean-css'), //Модуль для css
    concat = require('gulp-concat'), //Объединение файлов
    autoprefixer = require('gulp-autoprefixer'), // Префиксы для кроссбраузерности
    image = require('gulp-image'); // Модуль для изображений
    browserSync = require('browser-sync').create(); // browser Sync


/**
 Gulp
 1. gulp.task() - создание новой задачи
 2. gulp.src() - выбирает файлы для преобразования
 3. gulp.dest() - сохраняет уже преобразованные файлы
 4. gulp.watch() - выполняет отслеживание изменений
 */

 // Default task

gulp.task('default', ['delFiles','html', 'sass','js', 'image','fonts', 'watch'], function () {
   console.log('default task is done');
   
});


// Deleting all the files from the dist 
gulp.task('delFiles', function () {
    delFiles('./dist/*');
});

//HTML 
gulp.task('html', function () {
    gulp.src(['./app/index.html'])
        .pipe(gulp.dest('./dist'));

    browserSync.reload({stream: false});
});


// Compiling sass in css
gulp.task('sass', function () {
    gulp.src(['./app/scss/main.scss', './app/scss/flickity.min.css'])
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/css'));
        browserSync.reload({stream: false});
});



//Transferring images from app to dist
gulp.task('image', function () {
  gulp.src('./app/image/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/image'));
    browserSync.reload({stream: false});
});

//Transferring fonts from app to dist 
gulp.task('fonts', function () {
  gulp.src('./app/fonts/*')
    .pipe(gulp.dest('./dist/fonts'));
    browserSync.reload({stream: false});
});

//Transferring js files from app to dist
gulp.task('js', function () {
    gulp.src('./app/js/*')
        .pipe(gulp.dest('./dist/js'));
    
    browserSync.reload({stream: false});
});



// Watch the changes
gulp.task('watch', ['browserSync'], function () {
    gulp.watch(['app/index.html'], ['html']);
    gulp.watch('./app/json/**/*.json', ['json']);
    gulp.watch('./app/scss/**/*.scss', ['sass']);
    gulp.watch('./app/js/**/*.js', ['js']);
});


// Browser Sync
gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
});

