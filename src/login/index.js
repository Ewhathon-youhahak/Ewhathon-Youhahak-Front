// Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const loginStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#35AE92',

  
};

const cardStyle = {
    display: 'flex', // 추가된 속성
    flexDirection: 'column', // 추가된 속성
    alignItems: 'center', // 추가된 속성
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',

    padding: '40px', // 패딩 증가
    width: '400px', // 너비 증가
};

const inputStyle = {
  margin: '10px 0',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  width: '200px',

  padding: '15px', // 패딩 증가
  width: '100%', // 부모 요소(cardStyle)에 맞춰 너비 조정
};

const buttonStyle = {
  margin: '10px 0',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#35AE92',
  color: 'white',
  width: '228px',
  cursor: 'pointer',

  padding: '15px 20px', // 패딩 증가
  width: '100%', // 부모 요소(cardStyle)에 맞춰 너비 조정
};

export const Login = () => {
    const navigate = useNavigate();

  // 회원가입 페이지로 이동하는 함수
  const goToSignUp = () => {
    navigate('/signup');
    // 여기에 회원가입 페이지로 이동하는 로직을 작성하세요.
    // 예: window.location.href = '/signup';
  };

  return (
    <div style={loginStyle}>
      <div style={cardStyle}>

        <p style={{
         fontSize: '40px', // 글씨 크기 증가 
        fontWeight: 'bold', // 글씨 두께 설정
        margin: '20px 0 20px 0' // 마진 설정, 아래쪽에 여백을 줘서 입력창과 구분
        }}>로그인</p>

        <input type="email" placeholder="이메일 주소" style={inputStyle} />
        <input type="password" placeholder="비밀번호" style={inputStyle} />
        <button style={buttonStyle}>로그인하기</button>
        <p
          style={{ cursor: 'pointer', color: '#35AE92', textDecoration: 'underline' }}
          onClick={goToSignUp}
        >
          회원가입하기
        </p>
      </div>
    </div>
  );
};
