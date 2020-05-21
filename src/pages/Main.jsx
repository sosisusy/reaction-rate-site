import React, { Component } from "react";
import "./Main.scss"

import ReactionContainer from "components/reaction/ReactionContainer"
import ReactionTableContainer from "components/reaction-table/ReactionTableContainer"

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [100, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
        }
    }

    // 데이터 저장
    dataSaveHandle(time) {
        console.log(time)
        const { data } = this.state

        let newData = [...data, time]

        this.setState({
            data: newData,
        })
    }

    render() {
        const { data } = this.state

        return (
            <section className="main__section">
                <h1 className='title'>반응속도 테스트</h1>
                <ReactionContainer onSave={(time) => this.dataSaveHandle(time)} />
                <ReactionTableContainer data={data} />
            </section>
        );
    }
}

export default Main;
