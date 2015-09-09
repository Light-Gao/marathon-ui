var React = require("react/addons");

var AppFormErrorMessages = require("../validators/AppFormErrorMessages");
var FormActions = require("../actions/FormActions");
var StoreFormGroupComponent =
  require("../components/StoreFormGroupComponent");

var OptionalSettingsComponent = React.createClass({
  displayName: "OptionalSettingsComponent",

  propTypes: {
    errorIndices: React.PropTypes.object.isRequired,
    fields: React.PropTypes.object.isRequired
  },

  getErrorMessage: function (fieldId) {
    var props = this.props;
    var errorIndex = props.errorIndices[fieldId];
    if (props.errorIndices[fieldId] != null) {
      return AppFormErrorMessages.getMessage(fieldId, errorIndex);
    }
    return null;
  },

  handleFieldUpdate: function (fieldId, value) {
    FormActions.update(fieldId, value);
  },

  render: function () {
    var fields = this.props.fields;

    var contraintsHelp = "Comma-separated list of valid constraints. " +
      "Valid constraint format is \"field:operator[:value]\".";
    var executorHelp = "Executor must be the string '//cmd', a string " +
      "containing only single slashes ('/'), or blank.";
    var portsHelp = "Comma-separated list of numbers. 0's (zeros) assign " +
      "random ports. (Default: one random port)";

    return (
      <div>
        <FormGroupComponent
          attribute="executor"
          label="Executor"
          help={executorHelp}
          model={model}
          errors={errors}
          validator={appValidator}>
          <input />
        </FormGroupComponent>
        <FormGroupComponent
          attribute="ports"
          help={portsHelp}
          label="Ports"
          model={model}
          errors={errors}
          validator={appValidator}>
          <input />
        </FormGroupComponent>
        <FormGroupComponent
          attribute="uris"
          help="Comma-separated list of valid URIs."
          label="URIs"
          model={model}
          errors={errors}
          validator={appValidator}>
          <input />
        </FormGroupComponent>
        <FormGroupComponent
          attribute="constraints"
          help={helpMessage}
          label="Constraints"
          model={attr}
          errors={errors}
          validator={appValidator}>
          <input />
        </FormGroupComponent>
      </div>
    );
  }
});

module.exports = OptionalSettingsComponent;
