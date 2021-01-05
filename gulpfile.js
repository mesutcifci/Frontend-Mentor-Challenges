const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');

let browserList = [
    'last 2 versions'
];

gulp.task('four-card', () => {
    return gulp.src("./four-card-feature-section-master/scss/**/*.scss")
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(prefix({ overrideBrowserslist: browserList, cascade: false  }))
    .pipe(gulp.dest("./four-card-feature-section-master/css"))
});

gulp.task('base-apparel', () => {
    return gulp.src("./base-apparel-coming-soon-master/scss/**/*.scss")
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(prefix({ overrideBrowserslist: browserList, cascade: false  }))
    .pipe(gulp.dest("./base-apparel-coming-soon-master/css"))
});


gulp.task('intro-component', () => {
   
    return gulp.src("./intro-component-with-signup-form-master/scss/**/*.scss")
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(prefix({ overrideBrowserslist: browserList, cascade: false  }))
    .pipe(gulp.dest("./intro-component-with-signup-form-master/css"))
});

gulp.task('watch', () => {
    gulp.watch("./four-card-feature-section-master/scss/**/*.scss", gulp.series("four-card"));
    gulp.watch("./base-apparel-coming-soon-master/scss/**/*.scss", gulp.series("base-apparel"));
    gulp.watch("./intro-component-with-signup-form-master/scss/**/*.scss", gulp.series("intro-component"));
});