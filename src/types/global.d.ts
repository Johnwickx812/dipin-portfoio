/// <reference types="react" />
/// <reference types="react-dom" />

// Ensure JSX namespace is available globally
declare namespace JSX {
  interface Element extends React.ReactElement<any, any> {}
  interface IntrinsicElements extends React.JSX.IntrinsicElements {}
}

