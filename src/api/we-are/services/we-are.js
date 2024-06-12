'use strict';

/**
 * we-are service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::we-are.we-are');
