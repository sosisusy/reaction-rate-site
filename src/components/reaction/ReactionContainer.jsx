import React, { Component } from 'react'

class ReactionContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            timer: null,
            gameStart: false,
            targetShow: false,
            count: 0,
        }
    }

    timeHandle() {
        let time = this.state.time + 1
        this.setState({
            time: time
        })
    }

    timerStart() {

        this.timer = setInterval((copyThis) => {
            this.timeHandle()
        }, 1);

        // this.setState({
        //     timer: timer
        // })
    }

    timerStop() {
        clearInterval(this.timer)
    }

    contantClick() {
        const { gameStart } = this.state

        if (!gameStart) {
            this.setState({
                gameStart: true
            })
        }
    }

    render() {
        const { time, count, gameStart, targetShow } = this.state
        let displayText = ""

        if (gameStart) {
            if (targetShow) {
                displayText = "Click!!"
            } else {
                displayText = "녹색이 되면 클릭하세요"
            }
        } else {
            displayText = "준비가 되면 클릭하세요"
        }

        return (
            <div className="reaction-container">
                <div className="content" onClick={() => this.contantClick()}>
                    <div className="text">{displayText}</div>
                    <div className="timer">{time}ms</div>
                    <div className="count">{count}</div>
                </div>
            </div>
        )
    }
}

export default ReactionContainer