import React, { Component } from 'react';
import { connect } from "react-redux";
import { EmpBody } from './EmpBody';
import { EmpHeader } from "./EmpHeader";

class Emp extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <EmpHeader headers={this.props.headers} />
                    <EmpBody records={this.props.data} {...this.props}/>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    headers: store.hearders,
    data: store.data
});

export default connect(mapStateToProps, null)(Emp);
