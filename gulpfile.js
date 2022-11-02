const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");

gulp.task("four-card", () => {
  return gulp
    .src("./four-card-feature-section-master/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest("./four-card-feature-section-master/css"));
});

gulp.task("base-apparel", () => {
  return gulp
    .src("./base-apparel-coming-soon-master/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest("./base-apparel-coming-soon-master/css"));
});

gulp.task("intro-component", () => {
  return gulp
    .src("./intro-component-with-signup-form-master/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest("./intro-component-with-signup-form-master/css"));
});

gulp.task("single-price", () => {
  return gulp
    .src("./single-price-grid-component-master/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest("./single-price-grid-component-master/css"));
});

gulp.task("ping-coming-soon", () => {
  return gulp
    .src("./ping-coming-soon-page-master/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest("./ping-coming-soon-page-master/css"));
});

gulp.task("huddle-landing-page", () => {
  return gulp
    .src(
      "./huddle-landing-page-with-single-introductory-section-master/scss/**/*.scss"
    )
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      gulp.dest(
        "./huddle-landing-page-with-single-introductory-section-master/css"
      )
    );
});

gulp.task("project-tracking-intro", () => {
  return gulp
    .src("./project-tracking-intro-component-master/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest("./project-tracking-intro-component-master/css"));
});

gulp.task("fylo-dark-theme-landing", () => {
  return gulp
    .src("./fylo-dark-theme-landing-page-master/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest("./fylo-dark-theme-landing-page-master/css"));
});

gulp.task("manage-landing-page", () => {
  return gulp
    .src("./manage-landing-page-master/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest("./manage-landing-page-master/css"));
});

gulp.task("chat-app", () => {
  return gulp
    .src("./chat-app-css-illustration-master/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest("./chat-app-css-illustration-master/css"));
});

gulp.task("job-listings-with-data-attributes", () => {
  return gulp
    .src("./static-job-listings-with-data-attributes/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest("./static-job-listings-with-data-attributes/css"));
});

gulp.task("job-listings-with-json", () => {
  return gulp
    .src("./static-job-listings-with-json/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest("./static-job-listings-with-json/css"));
});

gulp.task("watch", () => {
  gulp.watch(
    "./four-card-feature-section-master/scss/**/*.scss",
    gulp.series("four-card")
  );
  gulp.watch(
    "./base-apparel-coming-soon-master/scss/**/*.scss",
    gulp.series("base-apparel")
  );
  gulp.watch(
    "./intro-component-with-signup-form-master/scss/**/*.scss",
    gulp.series("intro-component")
  );
  gulp.watch(
    "./single-price-grid-component-master/scss/**/*.scss",
    gulp.series("single-price")
  );
  gulp.watch(
    "./ping-coming-soon-page-master/scss/**/*.scss",
    gulp.series("ping-coming-soon")
  );
  gulp.watch(
    "./huddle-landing-page-with-single-introductory-section-master/scss/**/*.scss",
    gulp.series("huddle-landing-page")
  );
  gulp.watch(
    "./project-tracking-intro-component-master/scss/**/*.scss",
    gulp.series("project-tracking-intro")
  );
  gulp.watch(
    "./fylo-dark-theme-landing-page-master/scss/**/*.scss",
    gulp.series("fylo-dark-theme-landing")
  );
  gulp.watch(
    "./manage-landing-page-master/scss/**/*.scss",
    gulp.series("manage-landing-page")
  );
  gulp.watch(
    "./chat-app-css-illustration-master/scss/**/*.scss",
    gulp.series("chat-app")
  );
  gulp.watch(
    "./static-job-listings-with-data-attributes/scss/**/*.scss",
    gulp.series("job-listings-with-data-attributes")
  );
  gulp.watch(
    "./static-job-listings-with-json/scss/**/*.scss",
    gulp.series("job-listings-with-json")
  );
});
