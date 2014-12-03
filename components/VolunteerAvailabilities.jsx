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

var Events = React.createClass({
  getInitialState: function() {
    return {
      availabilities: []
    }
  },

  componentWillMount: function() {
    var self = this;

    actions.availability.list({
      data : {
        idUser : null,
        startDate : null,
        endDate : null
      }
    }, function (err, res) {
      if (err) {
        MKAlertTrigger.showAlert(__("volunteer::error", {context: err.context}));
        console.error(err);
        return;
      }

      _.forEach(availabilities, function(availability) {
        availability.startDate = formatDate(new Date(event.startDate));
        availability.endDate = formatDate(new Date(event.startDate));
      });

      self.setState({availabilities: availabilities});
    });
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
          router.transitionTo(getRouteName(["updateAvailabilityPage"]), {id : availability.id})
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
          var id = availability.id;
          actions.availability.remove(
          {
            data: {
              id : id
            }
          }, function(err, res) {
            if (err) {
              console.error(err);
              MKAlertTrigger.showAlert(__("errors::error", {context: err.context}));
              return;
            }
            var events = self.state.events;
            events.splice(i, 1);
            self.setState({
              events: events
            });
            MKAlertTrigger.showAlert(__("event::removedAvailabilityMessage") + ": " + availability.startDate + " - " + availability.endDate);
          });
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
        "name",
        "type",
        "startDate",
        "actions"
      ],
      columns: {
        name: {
          name: __("name"),
        },
        type: {
          name: __("event::type"),
          cellGenerator: function(event) {
            return __("event::" + event.type);
          }
        },
        startDate: {
          name: __("event::startDate"),
        },
        actions: {
          name: __("actions"),
          isStatic: true,
          cellGenerator: function(event) {
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
            items={this.state.events}
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

module.exports = Events;
