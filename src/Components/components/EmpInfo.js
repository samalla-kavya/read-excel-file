import React, { Component } from 'react';
import { connect } from "react-redux";

class EmpInfo extends Component {
    render() {
        console.log('props', this.props.selectedEmp)
        return (
            <div>
                <h1>EMPLOYEE DATA</h1>
                <div className="card">
                    <div className="card-body">
                        Hello World
                  </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    selectedEmp: store.selectedEmp
});

export default connect(mapStateToProps, null)(EmpInfo);
