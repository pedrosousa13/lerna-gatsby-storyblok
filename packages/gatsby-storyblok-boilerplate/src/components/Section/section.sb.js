const Row = require("../Row/row.sb");

module.exports = {
  name: "section",
  display_name: "Section",
  is_root: false,
  is_nestable: true,
  schema: {
    title: {
      type: "text"
    },
    text_color: {
      type: "option",
      options: [
        {
          value: "default",
          name: "default"
        },
        {
          value: "light",
          name: "light"
        }
      ]
    },
    content: {
      type: "bloks",
      restrict_components: true,
      component_whitelist: [Row.name],
      translatable: false,
      restrict_type: ""
    }
  }
};
