import React from 'react'

const Widget = React.lazy(() => import('app2/Widget'))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ fontSize: 20, color: 'orange' }}>
          Host App
        </p>
      </header>

      <main>

        <React.Suspense fallback="Loading Button">
          <Widget />
      </React.Suspense>
      </main>
    </div>
  );
}

export default App;
