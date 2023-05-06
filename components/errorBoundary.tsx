"use client"

import { Component, ReactNode } from "react"

class ErrorBoundary extends Component {
  state = { hasError: false, error: null }
  static getDerivedStateFromError(error: string | null) {
    return {
      hasError: true,
      error
    }
  }
  render(): ReactNode {
    if (this.state.hasError) {
      // @ts-ignore
      return this.props.fallback
    }
    // @ts-ignore
    return this.props.children
  }
}

export default ErrorBoundary