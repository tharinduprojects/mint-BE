'use strict';

/**
 * why-mint service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::why-mint.why-mint');
