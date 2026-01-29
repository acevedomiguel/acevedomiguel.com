import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
	children: ReactNode;
	fallback?: ReactNode;
}

interface State {
	hasError: boolean;
	error?: Error;
}

/**
 * ErrorBoundary component catches JavaScript errors anywhere in the child
 * component tree and displays a fallback UI instead of crashing the whole app.
 *
 * Usage:
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 */
class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): State {
		// Update state so the next render will show the fallback UI
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// Log error details for debugging
		console.error("ErrorBoundary caught an error:", error, errorInfo);
	}

	handleReset = () => {
		this.setState({ hasError: false, error: undefined });
	};

	render() {
		if (this.state.hasError) {
			// Custom fallback UI provided
			if (this.props.fallback) {
				return this.props.fallback;
			}

			// Default fallback UI
			return (
				<div className="min-h-screen flex items-center justify-center p-6">
					<div className="max-w-md w-full bg-red-50 border border-red-200 rounded-lg p-6 text-center">
						<h2 className="text-2xl font-bold text-red-800 mb-3">
							Oops! Something went wrong
						</h2>
						<p className="text-red-600 mb-4">
							We encountered an unexpected error. Please try refreshing the page.
						</p>
						{this.state.error && (
							<details className="text-left mb-4">
								<summary className="cursor-pointer text-sm text-red-700 hover:text-red-900">
									Error details
								</summary>
								<pre className="mt-2 text-xs bg-red-100 p-2 rounded overflow-auto">
									{this.state.error.message}
								</pre>
							</details>
						)}
						<div className="flex gap-3 justify-center">
							<button
								onClick={() => window.location.reload()}
								className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition-colors"
							>
								Refresh Page
							</button>
							<button
								onClick={this.handleReset}
								className="bg-white hover:bg-gray-50 text-red-600 border border-red-600 px-6 py-2 rounded transition-colors"
							>
								Try Again
							</button>
						</div>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
