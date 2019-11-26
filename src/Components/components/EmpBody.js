import React from 'react';
import  EmpData from "./EmpData";

export const EmpBody = (props) => {
    const rows = props.records.map((info, index) => {
        return (
            <EmpData data {...props} data={info} key={index} />
        )
    })
    return (
        <tbody>
            {rows}
        </tbody>
    )
}
