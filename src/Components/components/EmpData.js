import React, { Component } from 'react';
import { connect } from "react-redux";
import { selectEmp } from '../action';


class EmpData extends Component {
    
    clickHandler = (id) => {
        this.props.selectEmp(id);
        this.props.history.push(`/Emp/${id}`)
    }
    render() {
        console.log('id is', this.props.history);
        return (
            <tr onClick={() => this.clickHandler(this.props.data.id)}>
                <td >{this.props.data.id}</td>
                <td >{this.props.data.name}</td>
                <td >{this.props.data.rollNum}</td>
                <td >{this.props.data.age}</td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    selectEmp: (data) => dispatch(selectEmp(data)),
});

export default connect(null, mapDispatchToProps)(EmpData);
