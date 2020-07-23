const Column = require("../Column/column.sb");

module.exports = {
  display_name: "Row",
  is_nestable: true,
  is_root: false,
  name: "row",
  schema: {
    columns: {
      component_whitelist: [Column.name],
      restrict_components: true,
      type: "bloks"
    }
  }
};
