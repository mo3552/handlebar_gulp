const gulp = require('gulp');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));

const paths = {
	pages: 'src/pages/*.hbs',
	partials: 'src/partials/**/*.hbs',
	styles: {
		scss: 'src/styles/scss/*.scss'
	},
	scripts: 'src/js/**/*.js',
	dist: 'dist'
};
// Handlebars 빌드
function templates() {
	const options = {
		batch: ['src/partials']
	};
	return gulp.src(paths.pages)
		.pipe(handlebars({}, options))
		.pipe(rename({
			extname: '.html'
		}))
		// HTML minify
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest(paths.dist))
		.pipe(browserSync.stream());
}

// styles: SCSS → CSS로 변환 + minify
function styles() {
	return gulp.src(paths.styles.scss)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.dist))
		.pipe(browserSync.stream());
}

// jQuery 복사
function copyJquery() {
	return gulp.src('node_modules/jquery/dist/jquery.min.js')
		.pipe(gulp.dest(paths.dist))
		.pipe(browserSync.stream());
}

// Handlebar 복사
function copyHandlebars() {
	return gulp.src('node_modules/handlebars/dist/handlebars.min.js')
		.pipe(gulp.dest(paths.dist));
}

// JS 파일을 dist로 복사
// function scripts() {
// 	return gulp.src(paths.scripts)
// 		.pipe(uglify())
// 		.pipe(gulp.dest(paths.dist + '/js'));
// }
// BrowserSync 서버 실행
function serve() {
	browserSync.init({
		server: {
			baseDir: paths.dist
		},
		port: 3000
	});

	gulp.watch([paths.pages, paths.partials], templates);
	gulp.watch(paths.styles.scss, styles);
}

// 기본 태스크
exports.default = gulp.series(
	gulp.parallel(templates, styles, copyJquery, copyHandlebars),
	serve
);
