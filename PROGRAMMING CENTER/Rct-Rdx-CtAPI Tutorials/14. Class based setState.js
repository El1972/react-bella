import React, { Component } from "react";
import Book from "./Book";
import data from '../data'


class Practice extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: data,
            count: 1
        }
    }

    handleAdd = () => {
        this.setState({ count: this.state.count + 1 })
    }

    handleReset = () => {
        this.setState({ count: 0 })
    }

    render() {
        console.log(data);
        return (
            <div>
                <h2>This is our BookList</h2>
                {this.state.items.map((d) => {
                    return (
                        <Book d={d} key={d.id} />
                    )
                })}
                <button type="button" onClick={this.handleAdd}>press</button>
                <button type="button" onClick={this.handleReset}>press</button>

            </div>
        );
    }
}

export default Practice;