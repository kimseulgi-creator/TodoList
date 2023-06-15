import React from 'react';

function Layout(props) {
  return (
    <div className="container">
      <div className="inner">
        {/* header 부분 */}
        <header className="App-header">
          <h1>To Do List</h1>
          <p>React</p>
        </header>
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
