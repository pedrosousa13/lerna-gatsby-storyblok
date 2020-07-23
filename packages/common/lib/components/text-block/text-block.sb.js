module.exports = {
  name: 'text-block',
  display_name: 'Text block',
  component_group_name: 'Typography',
  is_root: false,
  is_nestable: true,
  schema: {
    content: {
      type: 'markdown',
      rich_markdown: false
    },
    title: {
      type: 'text'
    },
    title_size: {
      type: 'option',
      use_uuid: true,
      description: 'Semantic heading size.',
      options: [{
        value: '6',
        name: 'h6'
      }, {
        value: '5',
        name: 'h5'
      }, {
        value: '4',
        name: 'h4'
      }, {
        value: '3',
        name: 'h3'
      }, {
        value: '2',
        name: 'h2'
      }, {
        value: '1',
        name: 'h1'
      }, {
        value: '',
        name: ''
      }],
      default_value: '4'
    },
    visual_title_size: {
      type: 'option',
      use_uuid: true,
      description: 'Visual heading size.',
      options: [{
        value: '6',
        name: 'h6'
      }, {
        value: '5',
        name: 'h5'
      }, {
        value: '4',
        name: 'h4'
      }, {
        value: '3',
        name: 'h3'
      }, {
        value: '2',
        name: 'h2'
      }, {
        value: '1',
        name: 'h1'
      }],
      default_value: '4'
    },
    text_weight: {
      type: 'option',
      use_uuid: true,
      options: [{
        value: 'normal',
        name: 'normal'
      }, {
        value: 'light',
        name: 'light'
      }],
      default_value: 'normal',
      can_sync: true
    },
    settings_tab: {
      type: 'tab',
      display_name: 'Settings',
      keys: ['title_size', 'text_weight', 'visual_title_size']
    },
    advanced_tab: {
      type: 'tab',
      display_name: 'Advanced',
      keys: []
    }
  }
};