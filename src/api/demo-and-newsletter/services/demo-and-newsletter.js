'use strict';

/**
 * demo-and-newsletter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo-and-newsletter.demo-and-newsletter');
