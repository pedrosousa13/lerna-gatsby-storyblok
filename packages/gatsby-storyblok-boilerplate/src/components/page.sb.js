const Section = require("./Section/section.sb");

module.exports = {
  name: "page",
  display_name: "Page",
  is_root: true,
  is_nestable: false,
  schema: {
    body: {
      type: "bloks",
      restrict_components: true,
      component_whitelist: [Section.name]
    }
  }
};
