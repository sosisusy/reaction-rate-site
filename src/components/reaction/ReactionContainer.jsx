import React, { Component } from 'react'

import "./ReactionContainer.scss"

import Content from "./ReactionContent"


class ReactionContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            startTime: 0,
            gameStart: false,
            targetShow: false,
            contentText: "시작하려면 클릭하세요",
            contentClass: "",
            count: 1,
        }
    }

    // 측정시작
    timerStart() {
        this.setState({
            targetShow: true,
            contentClass: "start",
            contentText: "Click!!"
        })
        let date = new Date()

        this.setState({
            startTime: date.getTime()
        })
    }

    // 리셋
    timerAndStateReset(text, count) {
        clearTimeout(this.showTimer)
        this.setState({
            gameStart: false,
            targetShow: false,
            contentText: text,
            contentClass: "",
            startTime: 0,
            count: count
        })
    }

    // 측정종료
    timerStop(text, holdCount) {
        const { count, startTime } = this.state
        const { onSave } = this.props

        let date = new Date()
            , time = date.getTime() - startTime

        if (onSave) {
            onSave(time)
        }

        this.timerAndStateReset(`준비가 되면 클릭하세요<br>${time}ms`, count + 1)
    }

    // 측정 이전에 클릭
    timerInterrupt() {
        const { count } = this.state

        this.timerAndStateReset(`너무 빠르게 클릭했습니다.<br>다시 시작하려면 클릭하세요`, count)
    }

    // 준비 ~ 시작
    gamestart() {
        let showTimer = Math.floor((Math.random() * 3 + 2) * 1000);

        this.showTimer = setTimeout(() => {
            this.timerStart()
        }, showTimer);
    }

    contentClickHandle() {
        const { gameStart, targetShow } = this.state

        if (!gameStart) {
            // 측정 준비
            this.gamestart()
            this.setState({
                gameStart: true,
                contentText: "녹색이 되면 클릭하세요",
                contentClass: "ready"
            })
        } else {

            if (targetShow) {
                // 측정 완료
                this.timerStop()
            } else {
                // 측정 이전에 클릭
                this.timerInterrupt()
            }
        }
    }

    render() {
        return (
            <div className="reaction-container">
                <Content
                    onClick={() => this.contentClickHandle()}
                    {...this.state}
                />
            </div>
        )
    }
}

export default ReactionContainer