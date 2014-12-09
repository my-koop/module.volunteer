var React = require("react");

var BSInput  = require("react-bootstrap/Input");
var BSButton = require("react-bootstrap/Button");
var BSCol    = require("react-bootstrap/Col");
var BSGrid   = require("react-bootstrap/Grid");
var BSRow    = require("react-bootstrap/Row");

var MKDateTimePicker      = require("mykoop-core/components/DateTimePicker");
var MKConfirmationTrigger = require("mykoop-core/components/ConfirmationTrigger");
var MKFeedbacki18nMixin   = require("mykoop-core/components/Feedbacki18nMixin");

var formatDate = require("language").formatDate;
var __         = require("language").__;
var actions    = require("actions");


var TimeWorked = React.createClass({
  mixins: [MKFeedbacki18nMixin],

  propTypes: {
    userId: React.PropTypes.number.isRequired,
  },

  getInitialState: function() {
    return( {
      data: {},
    });
  },

  handleFieldChange: function(field, newValue) {
    var data = this.state.data;
    data[field] = newValue;
    this.setState({data: data});
  },

  makeValueLink: function(field) {
    return {
      value: this.state.data[field],
      requestChange: this.handleFieldChange.bind(this, field)
    }
  },

  onSubmit: function() {
    var self = this;
    this.clearFeedback();
    actions.timeworked.add({
      i18nErrors: {},
      data: {
        duration: self.state.data.duration,
        date: self.state.data.workdate
      }
    }, function(err) {
      if(err) {
        return self.setFeedback(err.i18n, "danger");
      }
      self.setFeedback({key: "volunteer::timeWorkedRequest_success"}, "success");
    })
  },

  render: function() {
    var self = this;
    return (
      <div>
       <BSRow>
          <BSCol xs={12}>
            {this.renderFeedback()}
          </BSCol>
        </BSRow>
        <BSRow>
          <BSCol xs={4}>
            <label htmlFor="workdate" key="workdate">
              {__("volunteer::timeWorkedDateLabel")}
            </label>
            <MKDateTimePicker
              id="workdate"
              max={new Date()}
              value={self.state.data.workdate}
              onChange={function(date, str) {
                self.handleFieldChange("workdate", date);
              }}
            />
          </BSCol>
        </BSRow>
        <BSRow>
          <BSCol xs={4}>
            <BSInput
              type="number"
              label={__("volunteer::timeWorkedTimeLabel")}
              valueLink={this.makeValueLink("duration")}
            />
           </BSCol>
        </BSRow>
        <BSRow>
          <BSCol xs={12}>
            <MKConfirmationTrigger
              message={__("general::areYouSure")}
              onYes={this.onSubmit}
            >
              <BSButton
                type="submit"
                bsStyle="success"
              >
                {__("volunteer::timeWorkedSubmit")}
              </BSButton>
            </MKConfirmationTrigger>
          </BSCol>
        </BSRow>
      </div>
    );
  }
})

module.exports = TimeWorked;
