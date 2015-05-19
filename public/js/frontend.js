var React = require("react");
var Sowa = require("./components/all.jsx");  

React.render(
  <Sowa.Form title="Nowe zgłoszenie o&nbsp;stoisko" resource_url="/api/v1/form_entry" />,
  document.getElementById('content')
);