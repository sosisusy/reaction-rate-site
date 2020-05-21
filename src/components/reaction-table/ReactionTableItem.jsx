import React from 'react'
import cn from 'classnames'

const ReactionTableItem = ({ n, v, }) => (
    <div className={cn("item")}>
        <div className="no">{n}</div>
        <div className="value">{v}</div>
    </div>
)

export default ReactionTableItem