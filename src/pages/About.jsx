import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const DtailBox = styled.div`
  width: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
  padding: 50px;
  border: 3px solid #525b76;

  &.detail h3 {
    font-size: 28px;
    font-weight: bold;
    margin: 30px 0;
  }
  &.detail .button {
    text-align: center;
    margin-top: 60px;
  }
  &.detail .button button {
    width: 160px;
    height: 30px;
    background-color: #e7e9ee;
  }
  &.detail .button button:hover {
    background-color: #434b60;
    color: white;
  }
`;

function About() {
  const todoStore = useSelector((state) => state.todo.todo);
  const param = useParams();
  const navigate = useNavigate();

  const obj = todoStore.filter((todo) => todo.id === param.id);

  const { id, title, todo } = obj[0];

  return (
    <DtailBox className="detail">
      <p>ID: {id}</p>
      <h3>{title}</h3>
      <p>{todo}</p>
      <div className="button">
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          이전으로
        </button>
      </div>
    </DtailBox>
  );
}
export default About;
