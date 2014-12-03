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

var VolunteerAvailabilities = React.createClass({
  getInitialState: function() {
    return {
      availabilities: []
    }
  },

  componentWillMount: function() {
    var self = this;


    var functionCallback = function (err, res) {
      if (err) {
        MKAlertTrigger.showAlert(__("volunteer::error", {context: err.context}));
        console.error(err);
        return;
      }

      var availabilities = res.availabilities;

      _.forEach(availabilities, function(availability) {
        availability.startDate = formatDate(new Date(availability.startDate), "LLL"); //FIXME : Show hour
        availability.endDate = formatDate(new Date(availability.startDate), "LLL"); //FIXME : Show hour
      });

      self.setState({availabilities: availabilities});
    };

    var data =  {
      idUser : null, 
      startDate : null, //Fixme : Use date from datetimepicker, 
      endDate : null  //Fixme : Use date from datetimepicker,
    };

    if(localSession.user && localSession.user.id != null){
      actions.availability.user.list({
        data : data
      }, functionCallback);
    }

    actions.availability.list({
      data : data
    }, functionCallback);
  },

  actionsGenerator: function(availability) {
    var actionDescriptors = [
    ];

    actionDescriptors.push
    (
      {
        icon: "edit",
        tooltip: {
          text: __("event::editAvailabilityTooltip"),
          overlayProps: {
            placement: "top"
          }
        },
        callback: function(){
        }
      },
      {
        icon: "trash",
        warningMessage: __("areYouSure"),
        tooltip: {
          text: __("remove"),
          overlayProps: {placement: "top"}
        },
        callback: function() {
        }
      }
    );

    return actionDescriptors;
  },

  render: function() {
    var self = this;

    // TableSorter Config
    var CONFIG = {
      defaultOrdering: [
        "idUser",
        "startDate",
        "endDate",
        "actions"
      ],
      columns: {
        idUser: {
          idUser: __("name"),
        },
        startDate: {
          name: __("volunteer::startDate"),
        },
        endDate: {
          name: __("volunteer::endDate"),
        },
        actions: {
          name: __("actions"),
          isStatic: true,
          cellGenerator: function(availability) {
            return (
              <MKListModButtons
                defaultTooltipDelay={500}
                buttons={self.actionsGenerator(event)}
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

module.exports = VolunteerAvailabilities;
