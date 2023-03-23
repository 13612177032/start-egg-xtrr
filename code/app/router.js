'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/create/task', controller.home.createTask);
  router.get('/', controller.home.index);
};
