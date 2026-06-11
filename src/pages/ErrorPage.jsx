import React, { Component } from 'react';
import { RefreshCcw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

// The visual error page component
export const ErrorView = ({ statusCode = 500, message = "Internal Server Error", details = "" }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="z-10 text-center max-w-2xl animate-in zoom-in duration-700">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
          <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-4">
          {statusCode}
        </h1>
        
        <h2 className="text-xl md:text-3xl font-sans text-white/90 mb-6 tracking-wide">
          {message}
        </h2>
        
        <p className="text-gray-400 mb-8 text-sm md:text-base leading-relaxed">
          {details || "A critical error occurred within the FaceHex engine matrix. Our automated systems have logged the anomaly."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 px-8 py-3 bg-white hover:bg-gray-200 text-black rounded-full transition-all duration-300 font-semibold w-full sm:w-auto justify-center"
          >
            <RefreshCcw size={18} />
            Reboot System
          </button>
          
          <a 
            href="/" 
            className="flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full transition-all duration-300 font-semibold w-full sm:w-auto justify-center"
          >
            <Home size={18} />
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
};

// The ErrorBoundary wrapper to catch React crashes
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("FaceHex Engine Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorView 
          statusCode="500" 
          message="System Crash Detected" 
          details="The interface encountered an unexpected rendering anomaly. Please reboot the system."
        />
      );
    }

    return this.props.children; 
  }
}

export default ErrorView;
