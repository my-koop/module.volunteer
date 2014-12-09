var React                 = require("react");
var BSInput               = require("react-bootstrap/Input");
var BSButton              = require("react-bootstrap/Button");
var BSCol                 = require("react-bootstrap/Col");
var BSGrid                = require("react-bootstrap/Grid");
var BSRow                 = require("react-bootstrap/Row");

var __                    = require("language").__;
var actions               = require("actions");
var MKAlert               = require("mykoop-core/components/Alert");
var MKDateTimePicker      = require("mykoop-core/components/DateTimePicker");
var MKConfirmationTrigger = require("mykoop-core/components/ConfirmationTrigger");
var formatDate            = require("language").formatDate;


var TimeWorked = React.createClass({

  propTypes: {
    userId: React.PropTypes.number.isRequired,
  },


  getInitialState: function(){
    return( {
      data: {},
      message: null,
      messageStyle: null
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

  setMessage: function(Message, isError) {
    this.setState({
      message: Message,
      messageStyle: (isError) ? "warning" : "success"
    })
  },

  onSubmit: function(){
    var self = this;
    actions.timeworked.add({
      options: {
        i18n: {}
      },
      data: {
        duration: self.state.data.duration,
        date: self.state.data.workdate
      }
    },function(err) {
      self.setMessage(__("volunteer::timeWorkedRequest", {context: err? "fail": "success"}))
    })
  },

  render: function(){
    var self = this;
    return (
      <div>
       <BSRow>
          <BSCol xs={12}>
            <MKAlert bsStyle={this.state.messageStyle} key="feedback">
              {this.state.message}
            </MKAlert>
          </BSCol>
        </BSRow>
        <BSRow>
          <BSCol xs={4}>
            <label htmlFor="workdate" key="workdate">
              {__("volunteer::timeWorkedDateLabel")}
            </label>
            <MKDateTimePicker
              id="workdate"
              time={false}
              format="yyyy-MM-dd"
              max={new Date()}
              onChange={function(date, str){
                self.handleFieldChange("workdate", str);
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