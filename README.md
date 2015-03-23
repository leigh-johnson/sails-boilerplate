# sails-boilerplate 
Full Stack Sanity~!

Dependency and module management split between [NPM](https://www.npmjs.com/) (back-end) and [Bower](http://bower.io/) (front-end) for easily delegation or pure sanity across the stack. 

Pipeline supports [Bootstrap](http://getbootstrap.com/), [Angular](https://angularjs.org/), [Angular Directives] (https://angular-ui.github.io/bootstrap/) for Bootstrap, [Jade](http://jade-lang.com/) templates, and [Sass](http://sass-lang.com/), straight out of the box. 

Passport-ready authentication system baked in. 

Built to rapidly prototype enterprise-grade realtime applications with [Sails.js](http://sailsjs.org/). You should be familiar with Sails before using this boilerplate!

## Installation & Use

1. `git clone https://github.com/nuwen/sails-boilerplate.git myproject`
2. `cd myproject`
3. `npm install`
4. `bower install`
5. `rm -r bower_components/boostrap-sails-official/assets/javascripts` REQUIRED: delete Bootstrap javascripts to prevent conflicts with Angular Directives for Bootstrap. Angular Directives will break if you skip this step!  
6. `sails lift`, `sails lift --debug` or `sails lift --verbose` to init your app with development debugging.
7. `sails lift --prod` to init your app in minified production mode.

## Instructions

### `tasks/config/bower.js`

Use this file to declare granular bower configurations. Do NOT modify `options: {ignorePackages: ['bootstrap-sass-official']}`! This setting allows you to manage **bootstrap-sass-official** modules in `/tasks/config/sass.js`. 

### `tasks/config/sass.js`

Use this file to manage the SASS pipeline. By default, Bootstrap styles are in the **loadPath** and `assets/scsss/importer.scss` is used to declare dependencies & partials.

These are just [Grunt](http://gruntjs.com/) tasks, so modify to your own spec!

