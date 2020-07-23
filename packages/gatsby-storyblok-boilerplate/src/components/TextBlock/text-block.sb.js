module.exports = {
  name: "text-block",
  display_name: "Text block",
  is_root: false,
  is_nestable: true,
  schema: {
    title: {
      type: "text"
    },
    content: {
      type: "markdown"
    }
  }
};
