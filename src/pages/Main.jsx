import React, { Component } from "react";
import "./Main.scss"

import ReactionContainer from "components/reaction/ReactionContainer"
import ReactionTableContainer from "components/reaction-table/ReactionTableContainer"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
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

    chartData(data) {
        return data.map((time, index) => {
            return {
                name: index + 1,
                value: time,
            }
        })
    }

    render() {
        const { data } = this.state
        let chartData = this.chartData(data)

        return (
            <section className="main__section">
                <h1 className='title'>반응속도 테스트</h1>
                <ReactionContainer onSave={(time) => this.dataSaveHandle(time)} />
                <ReactionTableContainer data={data} />
                <LineChart width={800} height={200} data={chartData} style={{ marginTop: "10px" }} margin={{ left: -10, right: 10, top: 5 }}>
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="1 2" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </section>
        );
    }
}

export default Main;
