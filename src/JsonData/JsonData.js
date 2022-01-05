import React from 'react'

import jsonData from './datafile.json';

console.log(jsonData)

const JsonData = () => {
    return (
        <div style={{ margin: "30px" }}>
            <h1 style={{ textAlign: "center" }}>Data Get Form JSON File</h1>

            {
                jsonData.map(item => (
                    <li style={{ listStyle: "none" }} key={item.id} >
                        Type:  {item.id}
                    </li>
                ))
            }
        </div>
    )
}

export default JsonData
