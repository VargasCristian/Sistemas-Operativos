//---------------------------------------------
//Cargar librerias
//---------------------------------------------

var gulp = require("gulp");
var jade = require("gulp-jade");
var stylus = require("gulp-stylus");
var plumber = require("gulp-plumber");
var uglify = require("gulp-uglify");

//---------------------------------------------
//Rutas input y output
//--------------------------------------------- 
var routes = {
    jade: {
        main: "./src/jade/*.jade",
        watch: "./src/jade/**/**/*.jade",
        output: "./dest/"
    },
    stylus: {
        main: "./src/styles/main.styl",
        watch: ["./src/styles/*.styl","./src/styles/includes/c-scan/*.styl", "./src/styles/includes/scan/*.styl", "./src/styles/includes/fifo/*.styl", "./src/styles/includes/sstf/*.styl"],
        output: "./dest/css/"
    },
    js: {
        main: "./src/scripts/*.js",
        output: "./dest/js/"
    }
}



//---------------------------------------------------
// Compilar jade
//----------------------------------------------------
gulp.task("build:jade", function(){
    gulp.src(routes.jade.main)
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(routes.jade.output));
});



//-------------------------------------------------------
//Compilar Stylus
//-------------------------------------------------------
gulp.task("build:stylus", function(){
    gulp.src(routes.stylus.main)
        .pipe(plumber())
        .pipe(stylus())
        .pipe(gulp.dest(routes.stylus.output));
    });



//------------------------------------------------------
//Compilar js
//------------------------------------------------------
gulp.task("build:js", function(){
    return gulp.src(routes.js.main)
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest(routes.js.output));
    });



//-------------------------------------------------------
//Compilar todo
//-------------------------------------------------------
gulp.task("build", ["build:jade", "build:stylus", "build:js"]);



//------------------------------------------------------
// Archivos en escucha
//------------------------------------------------------
gulp.task("watch", function(){
    gulp.watch(routes.jade.watch, ["build:jade"]);
    gulp.watch(routes.stylus.watch, ["build:stylus"]);
    gulp.watch(routes.js.main, ["build:js"]);
    });



//----------------------------------------------------------
//Arrancar Tareas(tareas por defecto => gulp)
//----------------------------------------------------------
gulp.task("default", ["build", "watch"]);
