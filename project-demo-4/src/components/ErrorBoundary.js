import { Component } from "react";

// Error Boundaries must be, until now, be constructed as a Class-based Component
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went Wrong</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
