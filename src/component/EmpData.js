import React from 'react';

export const EmpData = (props) => {
    const rows = props.data.map((info, index) => {
        return (
            <td key={index}>{info}</td>
        )
    });
    return (
        <tr>
            {rows}
        </tr>
    )
}
