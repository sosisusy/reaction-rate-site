import React from 'react'
import cn from "classnames"

const ReactionContent = ({ count, onClick, contentText, contentClass }) => {

    return (
        < div className={cn("content", contentClass)} onClick={() => onClick()}>
            <div className="text" dangerouslySetInnerHTML={{ __html: contentText }}></div>
            <div className="count">{count}번째</div>
        </div >
    )
}

export default ReactionContent