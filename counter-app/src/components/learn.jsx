// imrc
import React, { Component } from "react";

// cc
class Learn extends Component {
  state = {
    count: 0,
    tags: [],
    imageUrl: "https://picsum.photos/200"
  };

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="" />
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => {
            this.handleIncrement({ id: 1 });
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a tag~"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Learn;
