import React from 'react';
import { styled } from 'styled-components';

const InnerBox = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const HdBox = styled.header`
  &.App-header {
    height: 50px;
  }
  &.App-header h1 {
    display: inline-block;
    line-height: 50px;
  }
  &.App-header p {
    float: right;
    line-height: 50px;
  }
`;

function Layout(props) {
  return (
    <div className="container">
      <InnerBox className="inner">
        {/* header 부분 */}
        <HdBox className="App-header">
          <h1>To Do List</h1>
          <p>React</p>
        </HdBox>
        {props.children}
      </InnerBox>
    </div>
  );
}

export default Layout;
