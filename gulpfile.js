var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync'),
	reload = require('browser-sync').reload;

var path = {
	dist: {
		html: 'dist/',
		js: 'dist/js/',
		css: 'dist/css/',
		img: 'dist/img/',
		fonts: 'dist/fonts/'
	},
	src: {
		html: 'src/*.html',
		js: 'src/js/*.js',
		style: 'src/css/*.css',
		img: 'src/img/**/*.*',
		fonts: 'src/fonts/**/*.*'
	},
	watch: {
		html: 'src/**/*.html',
		js: 'src/js/**/*.js',
		style: 'src/css/**/*.css',
		img: 'src/img/**/*.*',
		fonts: 'src/fonts/**/*.*'
	},
	clean: './dist'
};

var serverConfig = {
	server: {
		baseDir: "./dist"
	},
	tunnel: true,
	host: 'localhost',
	port: 63341,
	logPrefix: "browser-sync"
};

// SASS
gulp.task('css', function () {
	gulp.src(path.src.style)
		.pipe(autoprefixer())
		.pipe(gulp.dest(path.dist.css))
		.pipe(reload({stream:true}));
});

// JADE
gulp.task('html', function(){
	gulp.src(path.src.html)
		.pipe(gulp.dest(path.dist.html))
		.pipe(reload({stream:true}));
});

// SCRIPTS
gulp.task('scripts', function(){
	gulp.src(path.src.js)
		.pipe(gulp.dest(path.dist.js))
		.pipe(reload({stream:true}));
});

// IMAGES
gulp.task('images', function(){
	gulp.src(path.src.img)
		.pipe(gulp.dest(path.dist.img));
});

// FONTS
gulp.task('fonts', function(){
	gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.dist.fonts));
});

// SERVER
gulp.task('browser-sync', function() {
	browserSync.init(serverConfig);
});

// WATCH
gulp.task('watch', function(){
	gulp.watch(path.watch.html, ['html']);
	gulp.watch(path.watch.style, ['css']);
	gulp.watch(path.watch.js, ['scripts']);
});

gulp.task('default', ['css', 'html', 'scripts', 'images', 'fonts', 'browser-sync', 'watch']);
