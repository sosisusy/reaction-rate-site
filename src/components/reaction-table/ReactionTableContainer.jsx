import React from 'react'
import "./ReactionTableContainer.scss"

import ReactionTable from "./ReactionTable"
import ReactionTableItem from "./ReactionTableItem"

const ReactionTableContainer = ({ data }) => {

    let aver = 0, sum = 0

    let tableData = data.map((time, i) => {
        console.log(time, i)
        let value = `${time}ms`
            , number = i + 1

        sum += time

        return (
            <ReactionTableItem
                key={i}
                n={number}
                v={value}
            />
        )
    })

    if (data.length != 0)
        aver = Math.floor(sum / data.length) + "ms"

    return (
        <div className="reaction-table-container">
            <ReactionTable>
                <div className="aver">
                    <ReactionTableItem
                        n="평균"
                        v={aver}
                    />
                </div>
                <div className="children">
                    {tableData}
                </div>
            </ReactionTable>
        </div>
    )
}

export default ReactionTableContainer