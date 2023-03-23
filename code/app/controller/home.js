'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('home.nj', {});
  }

  async createTask() {
    const { ctx } = this;
    console.info(ctx.request.body);
    console.info(ctx.headers);
    ctx.body = 'success';
  }
}

module.exports = HomeController;
