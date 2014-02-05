// exports.init = function(model) {};

exports.create = function(model, dom) {};

exports.textareaChange = function() {
  // check for errors
  var model = this.model;
  var dom = this.dom;
  // XXX I have no idea why the dom is some times not present
  if (dom && dom.element) {
    var textarea = dom.element('textarea');
    var required = model.get('required');
    if (required && !textarea.value) {
      model.set('error', 'this feild is required');
      return;
    };
  };
  model.set('error', '');
};
