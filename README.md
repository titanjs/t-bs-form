# Titan Bootstrap Form Component

## Usage

Import the compentent in your `app.js` file

```javascript

var app = require('derby').createApp(module)
  .use(require('../../components/form'))

```

Add the markup to your template

```html

<!-- Form-->
<div class="col-sm-7">
  <form class="form-horizontal" x-bind="submit: contact.add" method="POST" action="/-/contact">
    <div class="form-group">
      <div class="col-md-offset-2 col-md-10">
        <p>Form Title</p>
      </div>
    </div>
    
    {#with _page.newMsg as :c}
      <form:input type="text" field="{:c.name}" value="{:c.name}" label="Name" name="name" required="true">
      <form:input type="email" value="{:c.email}" label="Email" name="email" required="true">
      <form:input type="phone" value="{:c.phone}" label="Phone <small>(optional)</small>" name="phone">
      <form:textarea label="Messages" rows="4" required="true" value="{:c.message}" name="message">
      <form:controls value="Send">
    {/}
  </form>
</div>

```
