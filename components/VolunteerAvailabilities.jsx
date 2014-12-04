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
var Link              = require("react-router").Link;
var MKDateTimePicker  = require("mykoop-core/components/DateTimePicker");
var BSTable           = require("react-bootstrap/Table");
var BSButton          = require("react-bootstrap/Button");
var MKSpinner         = require("mykoop-core/components/Spinner");


var VolunteerAvailabilities = React.createClass({
  getInitialState: function() {
    return {
      availabilities: []
    }
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

      _.forEach(availabilities, function(availability) {
        availability.startDate = formatDate(new Date(availability.startDate), "LLL");
        availability.endDate = formatDate(new Date(availability.endDate), "LLL");
      });

      self.setState({availabilities: availabilities});
    };

    var data =  {
      idUser : this.props.params.idUser, 
      startDate : this.state.startDate, 
      endDate : this.state.endDate
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

    actionDescriptors.push
    (
      {
        icon: "edit",
        tooltip: {
          text: __("volunteer::editAvailabilityTooltip"),
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
          name: __("user"),
          cellGenerator: function(availability, i) {
            if(self.props.params.idUser == null){
              var name = (
                <Link
                  to={"volunteerAvailabilitiesByUser"}
                  params={{idUser: availability.idUser}}
                >
                  {availability.firstName + " " + availability.lastName}
                </Link>
              );
            }else{
              var name = availability.firstName + " " + availability.lastName
            }

            return (
              <div key={i}>
                  {name}
              </div>
            );
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
        
        <BSCol md={5}>
          <div>
            <BSTable>
              <tr>
                <td>
                  <label htmlFor="startDatePicker">
                    {__("volunteer::startDate")}
                  </label>
                  <MKDateTimePicker
                    id="startDatePicker"
                    value={this.state.startDate}
                    onChange={function(date, str) {
                      self.setState({
                        startDate: date
                      });
                    }}
                  />
                </td>
                <td>
                  <label htmlFor="endDatePicker">
                    {__("volunteer::endDate")}
                  </label>
                  <MKDateTimePicker
                    id="endDatePicker"
                    value={this.state.endDate}
                    onChange={function(date, str) {
                      self.setState({
                        endDate: date
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <BSButton
                    bsStyle="primary"
                    key="filterBtn"
                    onClick={function() {
                      self.updateList();
                    }}
                  >
                    {__("volunteer::filter")}
                  </BSButton>
                </td>
              </tr>
            </BSTable>
          </div>
        </BSCol>

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
