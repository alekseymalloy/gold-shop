import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg"; // нет потери изображения
import versionNumber from "gulp-version-number"; // что бы не кешировал браузер показывает время изменения


export const html = () => {
        return app.gulp.src(app.path.src.html)
            .pipe(app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "HTLM",
                    message: "Error: <%= error.message %>"
                })
            ))
            .pipe(fileInclude())
            .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
                .pipe(
                    app.plugins.if(
                        app.isBuild,
                             versionNumber({
                        'value': '%DT%',
                        'append': {
                            'key': '_v',
                            'cover': 0,
                            'to': [
                                'css',
                                'js',
                            ]
                        },
                        'output': {
                            'file': 'gulp/version.json'
                        }
                    }))
                )
                .pipe(app.gulp.dest(app.path.build.html))
                .pipe(app.plugins.browsersync.stream());
                // pipe(app.plugins.replace(/img\//g, 'img/')) // меняем значения на одинаковый путь
            }