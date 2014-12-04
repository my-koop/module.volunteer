var React = require("react");
var Link  = require("react-router").Link;

var BSCol = require("react-bootstrap/Col");

var MKTableSorter    = require("mykoop-core/components/TableSorter");
var MKListModButtons = require("mykoop-core/components/ListModButtons");
var MKAlertTrigger   = require("mykoop-core/components/AlertTrigger");

var __         = require("language").__;
var actions    = require("actions");
var formatDate = require("language").formatDate;
var util       = require("util");

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
        availability.startDate = formatDate(new Date(availability.startDate), "LLL");
        availability.endDate = formatDate(new Date(availability.endDate), "LLL");
      });

      self.setState({availabilities: availabilities});
    };

    var data =  {
      idUser : this.props.params.idUser,
      startDate : null, //Fixme : Use date from datetimepicker,
      endDate : null  //Fixme : Use date from datetimepicker,
    };

    var hasAdminPermissions = true; //Fixme : user real value
    if(data.idUser != null) {
      actions.availability.user.list({
        data : data
      }, functionCallback);
    } else if(hasAdminPermissions) {
      actions.availability.list({
        data : data
      }, functionCallback);
    }
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
        callback: function() {
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
          name: __("user"),
          cellGenerator: function(availability, i) {
            var nameText = util.format("%d: %s %s",
              availability.idUser,
              availability.firstName,
              availability.lastName
            );
            if(!self.props.params.idUser) {
              var name = (
                <Link
                  to={"volunteerAvailabilitiesByUser"}
                  params={{idUser: availability.idUser}}
                >
                  {nameText}
                </Link>
              );
            } else {
              var name = nameText;
            }
            return name;
          }
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
