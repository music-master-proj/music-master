import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }
  componentDidCatch(error, info) {
    console.log('Error:', error)
    console.log('Info:', info)
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went Wrong. We are trying to fix the issue. Thanks for your patience.</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
