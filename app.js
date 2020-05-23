class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false
    }
    this.handleMessageButton = this.handleMessageButton.bind(this);
  }

  handleMessageButton() {
    this.setState({
      messageIsActive: !this.state.messageIsActive
    });

  }

  render() {
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nobis itaque molestias iste nemo sed dolores ipsam quo et veritatis amet suscipit. Distinctio nam perferendis dicta. Rerum accusantium soluta adipisci.';

    return (
      <>
        <button onClick={this.handleMessageButton}>{this.state.messageIsActive ? "Hide" : "Show"}</button>
        {this.state.messageIsActive && <p>{text}</p>}
      </>
    )

  }
}

ReactDOM.render(<Message />, document.getElementById('root'))