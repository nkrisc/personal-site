const gulp = require('gulp');
const rsync = require('gulp-rsync');
const spawn = require('child_process').spawn;
var dotenv = require('dotenv').config();
const paths = {
    rsync: {
        src: '_site',
        dest: dotenv.parsed.DEST
    },
    watch: {
        posts: '_posts/*.markdown',
        html: ['**/*.html', '!_site/**/*.html'],
        css: '_sass/**/*',
        assets: 'assets/**/*',
    }
}

function deploy(cb) {
    gulp.src(paths.rsync.src)
        .pipe(rsync({
            root: '_site',
            hostname: dotenv.parsed.HOSTNAME,
            username: dotenv.parsed.USERNAME,
            destination: paths.rsync.dest,
            recursive: true,
            incremental: false,
            archive: true,
            silent: false,
            progress: true,
            dryrun: false
        }));
    cb();
}

function build(cb) {
    var jekyll = spawn('jekyll', ['build']);
    jekyll.stdout.on = data => {
        console.log(`Jekyll: ${data.toString()}`);
    }
    jekyll.stderr.on = data => {
        console.log(`Jekyll error: ${data.toString()}`);
    }
    jekyll.on('exit', (code) => {
        console.log(`Jekyll exited with code ${code.toString()}`);
        cb();
    })
}

function watch(cb) {
    gulp.watch(paths.watch.posts, build);
    gulp.watch(paths.watch.html, build);
    gulp.watch(paths.watch.css, build);
    gulp.watch(paths.watch.assets, build);
}

exports.deploy = deploy;
exports.build = build;
exports.watch = watch;
