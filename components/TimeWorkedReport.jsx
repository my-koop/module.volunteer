var React    = require("react/addons");
var BSPanel  = require("react-bootstrap/Panel");
var BSInput  = require("react-bootstrap/Input");
var BSCol    = require("react-bootstrap/Col");
var BSGrid   = require("react-bootstrap/Grid");
var BSRow    = require("react-bootstrap/Row");

var MKDateTimePicker = require("mykoop-core/components/DateTimePicker");
var MKTableSorter     = require("mykoop-core/components/TableSorter");
var MKAlert = require("mykoop-core/components/Alert");

var __ = require("language").__;
var formatDate = require("language").formatDate;
var formatMoney = require("language").formatMoney;
var _  = require("lodash");
var actions = require("actions");

var TimeWorkedReport = React.createClass({

  getInitialState: function() {
    return {
      fromDate: null,
      toDate: null,
      reports: null
    }
  },

  onSubmit: function(e) {
    e.preventDefault();
    var fromDate = this.state.fromDate;
    var toDate = this.state.toDate;
    if(!fromDate || !toDate) {
      return;
    }
    var self = this;
    actions.timeworked.report({
      data: {
        fromDate: fromDate,
        toDate: toDate
      },
      options: {
        i18nErrors: {},
        alertErrors: true
      }
    }, function(err, res) {
      if(err) {
        console.log(err);
      } else {
        self.setState({
          reports: res.reports,
          fromDateReport: fromDate,
          toDateReport: toDate,
        });
      }
    });
  },

  onDateChange: function(whatDatePicker, date, dateStr) {
    var state = this.state;
    state[whatDatePicker] = date;
    this.setState(state);
  },


  displayReport: function(categories) {
    if(this.state.reports) {
      if(this.state.reports.length > 0) {
         var CONFIG = {
            defaultOrdering: [
              "id",
              "name",
              "hours"
            ],
            columns: {
              id: {
                name: __("volunteer::timeWorkedReportID"),
              },
              name: {
                name: __("volunteer::timeWorkedReportName"),
              },
              hours: {
                name: __("volunteer::timeWorkedReportHours"),
              }
            }
          };
        return (
          <MKTableSorter
            config={CONFIG}
            items={this.state.reports}
            striped
            bordered
            condensed
            hover
          />
        );
      } else {
        return (
          <div block className="col-md-8">
            <MKAlert bsStyle="danger">
              {__("volunteer::timeWorkedReportNoResult")}
            </MKAlert>
          </div>
        );
      }
    }
    return null;
  },

  render: function() {
    var self = this;
    return (
      <div>
        <BSRow>
          <BSCol xs={12}>
            <h1> {__("volunteer::timeWorkedReportHeader")} </h1>
            <p> {__("volunteer::timeWorkedReportExplanation")} </p>
          </BSCol>
        </BSRow>
        <BSRow>
          <BSCol xs={12}>
            <form onSubmit={this.onSubmit}>
              <BSRow>
                <BSCol md={4}>
                  {__("transaction::financialReportLabelFromDate")}
                  <MKDateTimePicker
                    date={this.state.fromDate}
                    max={this.state.toDate || undefined}
                    onChange={this.onDateChange.bind(null,"fromDate")}
                  />
                </BSCol>
                <BSCol md={4}>
                  {__("transaction::financialReportLabelToDate")}
                  <MKDateTimePicker
                    date={this.state.toDate}
                    min={this.state.fromDate || undefined}
                    onChange={this.onDateChange.bind(null,"toDate")}
                  />
                </BSCol>
              </BSRow>
              <BSRow className="top-margin-15">
                <BSCol md={12}>
                  <BSInput
                    type="submit"
                    disabled={!this.state.toDate || !this.state.fromDate}
                    value={__("transaction::financialReportSubmit")}
                    bsStyle="primary"
                  />
                </BSCol>
              </BSRow>
            </form>
          </BSCol>
        </BSRow>
        <BSRow>
          <BSCol xs={8}>
            {this.displayReport()}
          </BSCol>
        </BSRow>
      </div>
    );
  },

});

module.exports = TimeWorkedReport;
