const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');

let browserList = [
    'last 2 versions'
];

gulp.task('four-card', () => {
    return gulp.src("./four-card-feature-section-master/scss/**/*.scss")
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(prefix({ overrideBrowserslist: browserList, cascade: false }))
        .pipe(gulp.dest("./four-card-feature-section-master/css"))
});

gulp.task('base-apparel', () => {
    return gulp.src("./base-apparel-coming-soon-master/scss/**/*.scss")
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(prefix({ overrideBrowserslist: browserList, cascade: false }))
        .pipe(gulp.dest("./base-apparel-coming-soon-master/css"))
});


gulp.task('intro-component', () => {
    return gulp.src("./intro-component-with-signup-form-master/scss/**/*.scss")
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(prefix({ overrideBrowserslist: browserList, cascade: false }))
        .pipe(gulp.dest("./intro-component-with-signup-form-master/css"))
});

gulp.task('single-price', () => {
    return gulp.src("./single-price-grid-component-master/scss/**/*.scss")
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(prefix({ overrideBrowserslist: browserList, cascade: false }))
        .pipe(gulp.dest("./single-price-grid-component-master/css"))
});

gulp.task('ping-coming-soon', () => {
    return gulp.src("./ping-coming-soon-page-master/scss/**/*.scss")
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(prefix({ overrideBrowserslist: browserList, cascade: false }))
        .pipe(gulp.dest("./ping-coming-soon-page-master/css"))
});


gulp.task('huddle-landing-page', () => {
    return gulp.src("./huddle-landing-page-with-single-introductory-section-master/scss/**/*.scss")
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(prefix({ overrideBrowserslist: browserList, cascade: false }))
        .pipe(gulp.dest("./huddle-landing-page-with-single-introductory-section-master/css"))
});


gulp.task('project-tracking-intro', () => {
    return gulp.src("./project-tracking-intro-component-master/scss/**/*.scss")
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(prefix({ overrideBrowserslist: browserList, cascade: false }))
        .pipe(gulp.dest("./project-tracking-intro-component-master/css"))
});

gulp.task('watch', () => {
    gulp.watch("./four-card-feature-section-master/scss/**/*.scss", gulp.series("four-card"));
    gulp.watch("./base-apparel-coming-soon-master/scss/**/*.scss", gulp.series("base-apparel"));
    gulp.watch("./intro-component-with-signup-form-master/scss/**/*.scss", gulp.series("intro-component"));
    gulp.watch("./single-price-grid-component-master/scss/**/*.scss", gulp.series("single-price"));
    gulp.watch("./ping-coming-soon-page-master/scss/**/*.scss", gulp.series("ping-coming-soon"));
    gulp.watch("./huddle-landing-page-with-single-introductory-section-master/scss/**/*.scss", gulp.series("huddle-landing-page"));
    gulp.watch("./project-tracking-intro-component-master/scss/**/*.scss", gulp.series("project-tracking-intro"));
});