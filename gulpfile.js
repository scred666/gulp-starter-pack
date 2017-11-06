var gulp                    = require('gulp'),
    gutil                   = require('gulp-util'),
    sass                    = require('gulp-sass'),
    browserSync             = require('browser-sync'),
    concat                  = require('gulp-concat'),
    uglify                  = require('gulp-uglify'),
    cleanCSS                = require('gulp-clean-css'),
    rename                  = require('gulp-rename'),
    del                     = require('del'),
    imagemin                = require("gulp-imagemin"),
    imageminJpegRecompress  = require('imagemin-jpeg-recompress'),
    imageminPngquant        = require('imagemin-pngquant'),
    plumber                 = require('gulp-plumber'),
    cache                   = require('gulp-cache'),
    autoprefixer            = require('gulp-autoprefixer'),
    bourbon                 = require('node-bourbon'),
    ftp                     = require('vinyl-ftp'),
    notify                  = require("gulp-notify"),
    rigger                  = require('gulp-rigger');


// Скрипты проекта
gulp.task('scripts', function () {
    return gulp.src([
		'app/libs/jquery/dist/jquery-3.2.1.min.js', //jquery
		'app/libs/popper/popper.min.js', //popper
        'app/libs/bootstrap/dist/js/bootstrap.min.js', //bootstrap v4
		'app/libs/wow/dist/wow.js', //wow & animate
		'app/libs/owl.carousel/dist/owl.carousel.js', //owl carousel
		'app/libs/slick-carousel/slick/slick.min.js', //slick
		//'app/libs/videobg/jquery.mb.YTPlayer.min.js', //videobg
		'app/libs/clip-path/clip-path-polygon.js', //clip-path-polygon
		'app/libs/device/device.js', //device
		//'app/libs/fancybox/jquery.fancybox.js', //fancybox
		'app/js/common.js', // Всегда в конце
		])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false,
        // tunnel: true,
        // tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
    });
});
// Move font-awesome fonts folder to css compiled folder
gulp.task('icons', function () {
    return gulp.src('app/libs/components-font-awesome/fonts/**.*')
        .pipe(gulp.dest('app/fonts'));
});
gulp.task('html', function () {
    return gulp.src('app/template/*.html') //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest('app')) //Выплюнем их в папку build
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass({
            includePaths: bourbon.includePaths
        }).on("error", notify.onError()))
        .pipe(rename({
            suffix: '.min',
            prefix: ''
        }))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleanCSS())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['sass', 'html', 'icons', 'scripts', 'browser-sync'], function () {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['scripts']);
    gulp.watch(['app/*.html', 'app/template/**/*.html'], ['html'], browserSync.reload);
});

gulp.task("imagemin", function () {
    return gulp.src("app/img/**/*")
        .pipe(plumber())
        .pipe(imagemin([
            imagemin.gifsicle({
                interlaced: true
            }),
            imageminJpegRecompress({
                progressive: true,
                max: 80,
                min: 70
            }),
            imageminPngquant({
                quality: '75-85'
            }),
            imagemin.svgo({
                plugins: [{
                    removeViewBox: false
                }]
            })
        ]))
        .pipe(gulp.dest('dist/img'));
});
gulp.task('build', ['removedist', 'html', 'sass', 'scripts', 'imagemin'], function () {

    var buildFiles = gulp.src([
		'app/*.html',
		'app/.htaccess',
		'app/send.php',
		]).pipe(gulp.dest('dist'));

    var buildCss = gulp.src([
		'app/css/main.min.css',
		]).pipe(gulp.dest('dist/css'));

    var buildJs = gulp.src([
		'app/js/scripts.min.js',
		]).pipe(gulp.dest('dist/js'));

    var buildFonts = gulp.src([
		'app/fonts/**/*',
		]).pipe(gulp.dest('dist/fonts'));

});

/*gulp.task('deploy', function() {

	var conn = ssh.create({
		host:      '91.193.165.150',
		user:      'a.rostov',
		password:  'Aa12345678',
		parallel:  10,
		log: gutil.log
	});

	var globs = [
	'dist/index.html'
	];
	return gulp.src(globs, { cwd: '/usr/local/www/apache24/data/gulp', buffer: false})
	.pipe(conn.dest('/usr/local/www/apache24/data/gulp'));

});*/



gulp.task('removedist', function () {
    //return del.sync('dist');
    return del.sync('dist/index.html');
    return del.sync('dist/fonts');
    return del.sync('dist/js');
    return del.sync('dist/css');
});
gulp.task('clearcache', function () {
    return cache.clearAll();
});

gulp.task('default', ['watch']);
