let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'dist/');

mix.styles([
    'public/css/fa-all.min.css',
    'public/css/argon.min.css',
    'public/css/animation.css',
    'public/css/custom.css'
], 'public/css/app.css')
