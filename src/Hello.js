import React from "react";

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  showNumbers() {
    return "123456789";
  }

  render() {
    return (
      <p>
        Hello {this.props.name} from Class Component {this.showNumbers()}
      </p>
    );
  }
}

export default Hello;
