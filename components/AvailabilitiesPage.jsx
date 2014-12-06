var React             = require("react");
var BSCol             = require("react-bootstrap/Col");
var BSButton          = require("react-bootstrap/Button");
var MKIcon            = require("mykoop-core/components/Icon");
var MKTableSorter     = require("mykoop-core/components/TableSorter");
var MKListModButtons  = require("mykoop-core/components/ListModButtons");
var __                = require("language").__;
var actions           = require("actions");
var MKAlertTrigger    = require("mykoop-core/components/AlertTrigger");
var formatDate        = require("language").formatDate;
var localSession      = require("session").local;
var router            = require("react-router");
var getRouteName      = require("mykoop-utils/frontend/getRouteName");
var BSTable           = require("react-bootstrap/Table");
var BSButton          = require("react-bootstrap/Button");
var Link              = require("react-router").Link;


var AvailabilitiesPage = React.createClass({
  getInitialState: function() {
    return {
      availabilities: []
    }
  },

  componentWillMount: function(){
    this.updateList();
  },

  updateList: function() {
    var self = this;

    var functionCallback = function (err, res) {
      if (err) {
        MKAlertTrigger.showAlert(__("volunteer::error", {context: err.context}));
        console.error(err);
        return;
      }

      var availabilities = res.availabilities;

      self.setState({availabilities: availabilities});
    };

    var data =  {
      idUser : this.props.params.idUser
    };

    var hasAdminPermissions = true; //Fixme : user real value
    if(data.idUser != null){
      actions.availability.user.list({
        data : data
      }, functionCallback);
    }else if(hasAdminPermissions){
      actions.availability.list({
        data : data
      }, functionCallback);
    }
  },

  actionsGenerator: function(availability) {
    var actionDescriptors = [
    ];

    return actionDescriptors;
  },

  render: function() {
    var self = this;

    function makeTextInput(field) {
      return function(availability, i) {
        var output = "";
        switch(field){
          case "sunday":
            output = availability.startSunday + " - " + availability.endSunday;
            break;
          case "monday":
            output = availability.startMonday + " - " + availability.endMonday;
            break;
          case "tuesday":
            output = availability.startTuesday + " - " + availability.endTuesday;
            break;
          case "wednesday":
            output = availability.startWednesday + " - " + availability.endWednesday;
            break;
          case "thursday":
            output = availability.startThursday + " - " + availability.endThursday;
            break;
          case "friday":
            output = availability.startFriday + " - " + availability.endFriday;
            break;
          case "saturday":
            output = availability.startSaturday + " - " + availability.endSaturday;
            break;
        }

        return output;
      }
    }

    // TableSorter Config
    var CONFIG = {
      defaultOrdering: [
        "fullName",
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "actions"
      ],
      columns: {
        fullName: {
          name: __("user"),
          cellGenerator: function(availability, i) {

            return (
              <div key={i}>
                  {availability.fullName}
              </div>
            );
          }
        },
        sunday: {
          name: __("sunday"),
          cellGenerator: makeTextInput("sunday")
        },
        monday: {
          name: __("monday"),
          cellGenerator: makeTextInput("monday")
        },
        tuesday: {
          name: __("tuesday"),
          cellGenerator: makeTextInput("tuesday")
        },
        wednesday: {
          name: __("wednesday"),
          cellGenerator: makeTextInput("wednesday")
        },
        thursday: {
          name: __("thursday"),
          cellGenerator: makeTextInput("thursday")
        },
        friday: {
          name: __("friday"),
          cellGenerator: makeTextInput("friday")
        },
        saturday: {
          name: __("saturday"),
          cellGenerator: makeTextInput("saturday")
        },
        actions: {
          name: __("actions"),
          isStatic: true,
          cellGenerator: function(availability, i) {
            return (
              <MKListModButtons
                defaultTooltipDelay={500}
                buttons={self.actionsGenerator(availability)}
              />
            );
          }
        }
      }
    };

    return (
      <BSCol md={12}>
        <div>
          <MKTableSorter
            config={CONFIG}
            items={this.state.availabilities}
            striped
            bordered
            condensed
            hover
          />
        </div>
      </BSCol>
    );
  }
});

module.exports = AvailabilitiesPage;