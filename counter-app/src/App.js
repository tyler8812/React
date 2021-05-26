import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
    state = {
        Counters: [
            { key: 1, id: 1, value: 5 },
            { key: 2, id: 2, value: 4 },
            { key: 3, id: 3, value: 9 },
            { key: 4, id: 4, value: 0 }
        ]
    };
    handleIncrement = counter => {
        const counters = [...this.state.Counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ Counters: counters });
    };

    handleReset = () => {
        const counters = this.state.Counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ Counters: counters });
    };

    handleDelete = counterId => {
        const Counters = this.state.Counters.filter(c => c.id !== counterId);
        this.setState({ Counters });
    };

    render() {
        return (
            <React.Fragment>
                <NavBar
                    totalCounters={
                        this.state.Counters.filter(c => c.value > 0).length
                    }
                />
                <main className="container">
                    <Counters
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        Counters={this.state.Counters}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
