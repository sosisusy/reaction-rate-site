import React, { Component } from "react";
import "./Main.scss"

import ReactionContainer from "components/reaction/ReactionContainer"
import ReactionTableContainer from "components/reaction-table/ReactionTableContainer"
import { AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area, Label } from "recharts";

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
                {/* <ReactionTableContainer data={data} /> */}
                <AreaChart width={800} height={300} data={chartData} style={{ marginTop: "10px" }} margin={{ left: 0, right: 10, top: 20 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#71d2f8" stopOpacity={0.6} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke="#71d2f8" fillOpacity={1} fill="url(#colorUv)" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="1 2" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </AreaChart>
            </section>
        );
    }
}

export default Main;
