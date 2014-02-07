exports.init = function(model) {};

exports.create = function(model, dom) {
  model.set('uid', dom.element('input').id);
};

exports.inputChange = function() {
  // check for errors
  var model = this.model;
  var dom = this.dom;
  // XXX I have no idea why the dom is some times not present
  if (dom && dom.element) {
    var input = dom.element('input');
    var required = model.get('required');
    if (required && !input.value) {
      model.set('error', 'This feild is required');
      return;
    };
  };
  model.set('error', '');
};
