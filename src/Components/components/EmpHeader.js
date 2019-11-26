import React from 'react';

export const EmpHeader = (props) => {
    console.log('headers', props.headers);
    const header = props.headers.map((prop, index) => {
        return (
            <th scope="col" key={index}>{prop}</th>
        )
    })
    return (
        <thead>
            <tr>
                {header}
            </tr>
        </thead>
    )
}
