import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: props.slides,
      index: 0,
    };
  }

  handleNext = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      index: prevState.index - 1,
    }));
  };

  handleRestart = () => {
    this.setState({
      index: 0,
    });
  };

  render() {
    const { index, slides } = this.state;
    const currentSlide = slides[index];

    return (
      <div>
        <h1 data-testid="title">{currentSlide.title}</h1>
        <p data-testid="text">{currentSlide.text}</p>

        <button
          onClick={this.handlePrev}
          disabled={index === 0}
          data-testid="button-prev"
        >
          Prev
        </button>
        <button
          onClick={this.handleNext}
          disabled={index === slides.length - 1}
          data-testid="button-next"
        >
          Next
        </button>
        <button
          onClick={this.handleRestart}
          disabled={index === 0}
          data-testid="button-restart"
        >
          Restart
        </button>
      </div>
    );
  }
}

export default App;
