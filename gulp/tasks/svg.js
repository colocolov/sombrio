import svgSprit from "gulp-svg-sprite";
import svgO from "gulp-svgo";
import del from "del";

// export const cleanSprites = () => {
//   return del(`${app.path.build.images}/icons/sprite.svg`);
// };

export const svgSprite = () => {
  // del.sync(app.path.build.images);
  return del(global.app.path.build.images + 'sprite.svg')
  .then(() => {
      return app.gulp
    .src(app.path.src.svg)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SVG",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(svgO({
      plugins: [{
        removeAttrs: { attrs: "(fill|stroke|style|width|height|data.*)" }
      }]
    }))
    .pipe(
      svgSprit({
        mode: {
          symbol: {
            // stack: {
            sprite: `../icons/sprite.svg`,
            //example: true,
          },
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.images));
  //.pipe(app.plugins.browserSync.stream())
  });
};

// Последовательная задача для удаления старой папки и создания нового спрайта
// export const svgSprite = app.gulp.series(cleanSprites, generateSvgSprite);