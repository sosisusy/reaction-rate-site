import React from 'react'
import cn from 'classnames'

const ReactionTableItem = ({ n, v, }) => (
    <div className={cn("item")}>
        {n}: {v}
    </div>
)

export default ReactionTableItem