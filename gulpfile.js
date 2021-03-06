const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('default', function (done) {
  return gulp.src('scss/index.scss') // Leo el archivo scss
    .pipe(sass().on('error', sass.logError)) // Convierto el contenido del archivo index.scss a CSS
    .pipe(gulp.dest('css')) // El CSS generado lo guardamos en la carpeta css
})

// Tarea que observa cambios en 'scss'
// En su primera ejecución lanzará también las tareas que pasamos como segundo parámetro en la función, default en este caso
gulp.task('watch', function (done) {
  return gulp.watch('scss/*.scss', gulp.series('default')) // Lanza la tarea 'default' cuando observa cambios en cualquier scss
})
