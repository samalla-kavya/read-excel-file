import React, { Component } from 'react';
import readXlsxFile from 'read-excel-file';
import { addHeaders, deleteHeaders, addData } from '../action';
import { connect } from "react-redux";

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        readXlsxFile(event.target.files[0]).then((rows) => {
            console.log('rows', rows);
            this.props.deleteHeaders();
            this.props.addHeaders(rows[0]);
            const data = rows.filter((row, index) => {
                return index > 0;
            });
            console.log(data);
            this.props.addData(data);
        });
    }
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label
                            htmlFor="uploadFile">Upload excel</label>
                        <input
                            type="file"
                            className="form-control-file"
                            id="uploadFile"
                            onChange={this.handleChange} />
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addHeaders: (data) => dispatch(addHeaders(data)),
    deleteHeaders: () => dispatch(deleteHeaders()),
    addData: (data) => dispatch(addData(data)),
});



export default connect(null, mapDispatchToProps)(FileUpload);
