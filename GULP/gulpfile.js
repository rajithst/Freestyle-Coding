var gulp = require('gulp');
var inject = require('gulp-inject')
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var uglify = require('gulp-uglify');
var pump = require('pump');
let cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');



const properties = require('./properties.js')
const styles = properties.customstyles;
const scripts = properties.customscripts; 
const mainFile = './'+properties.main;


gulp.task('inject',function(){
	var target = gulp.src(mainFile);
	var sources = [styles,scripts]

	return target.pipe(inject(gulp.src(sources,{read: false})))
				 .pipe(gulp.dest('./'))
				 
});

gulp.task('build',function(cb){

  gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));

	gulp.src(styles)
    	.pipe(cleanCSS({compatibility: 'ie8'}))
    	.pipe(gulp.dest('dist/css'));

      pump([
        gulp.src(scripts),
        uglify(),
        gulp.dest('dist/js/')
      ],
    cb
    );
})


gulp.task('browser-sync',function(){
	 browserSync.init({
        server: {
       		open: true,
            baseDir: "./",
        }
    
  });

	 gulp.watch(['*.html', styles, scripts], reload);
	
})

gulp.task('start',function(){
	gulp.start(['browser-sync']);
})