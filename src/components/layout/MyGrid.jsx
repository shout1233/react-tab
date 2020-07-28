import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../actions";

class MyGrid extends Component {
  constructor(props) {
    super(props);

    this.defaultColDef = {
      sortable: true,
      resizable: true,

      //ag-grid enterprice 에서만
      //enableValue: true,
      //enableRowGroup: true,
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    // When reloading the page and getting the state from local storage, fetch again the data for the currently displayed grid

    let gridId = this.props.id;
    let url = this.props.url;

    console.log("gridId : " + gridId);

    if (this.props.fetchAgain) {
      this.props.actions.fetchGridDataAction(gridId, url);
    }
  }

  render() {
    //console.log(JSON.stringify(this.props.columnDefs, null, 2));
    return (
      <div
        style={{ height: "600px", width: "1200px" }}
        className={`ag-theme-alpine ${this.props.className}`}
      >
        <AgGridReact
          columnDefs={this.props.columnDefs}
          rowData={this.props.rowData}
          defaultColDef={this.defaultColDef}
          sideBar={true}
          //EVENTS
          onGridReady={this.onGridReady.bind(this)}
          // state change events
        ></AgGridReact>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentViewInfo: state.currentViewInfo,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyGrid);
