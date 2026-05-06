import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

type State = {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    void error
    void info
    // Replace with telemetry bridge when backend logging is ready.
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="stateCard">
          <div className="stateCard__eyebrow">Recovery</div>
          <h2 className="stateCard__title">The page crashed safely.</h2>
          <p className="stateCard__body">
            Keep this boundary wired to telemetry and route-level fallbacks when production data is connected.
          </p>
        </section>
      )
    }

    return this.props.children
  }
}
