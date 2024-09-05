'use strict';

/**
 * multilanguage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::multilanguage.multilanguage');
