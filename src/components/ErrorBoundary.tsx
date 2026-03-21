import { Component, type ErrorInfo, type ReactNode } from "react";
import { Warning } from "@phosphor-icons/react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-full min-h-[400px] p-8 text-center fade-in">
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
            <Warning size={40} className="text-secondary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
          <p className="text-lg text-primary/70 mb-8 max-w-md mx-auto">
            We encountered an unexpected error while rendering this page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl active:scale-95 transform"
          >
            Reload Page
          </button>
          {import.meta.env.MODE === 'development' && (
            <div className="mt-8 p-4 bg-softgray/30 rounded-xl text-left overflow-auto max-w-2xl w-full border border-softgray font-mono text-xs">
              <p className="font-bold text-secondary mb-2">{this.state.error?.toString()}</p>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
