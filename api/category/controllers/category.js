'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    homepage: async (ctx) =>  {
        let entities;
        entities = await strapi.services.category.find();
        return await ctx.render("crown2_10", {
            data: entities,
            title: "Crown - JianJia Huang, 408411410",
        });
    },
};
