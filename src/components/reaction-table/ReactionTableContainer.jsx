import React from 'react'
import "./ReactionTableContainer.scss"

// import ReactionTable from "./ReactionTable"
import ReactionTableItem from "./ReactionTableItem"

const ReactionTableContainer = ({ data }) => {

    let tableData = data.map((time, i) => {
        console.log(time, i)
        let value = `${time}ms`
            , number = i + 1

        return (
            <ReactionTableItem
                key={i}
                n={number}
                v={value}
            />
        )
    })

    return (
        <div className="reaction-table-container">
            {/* <ReactionTable> */}
            {tableData}
            {/* </ReactionTable> */}
        </div>
    )
}

export default ReactionTableContainer