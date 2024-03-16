import React from 'react';

const signUpStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#35AE92',
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: 'white',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
  width: '300px', // or your desired width

  padding: '40px', // 패딩 증가
    width: '400px', // 너비 증가
};

const textStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
  margin: '0 0 20px 0',

  fontSize: '40px', 
};

const inputStyle = {
  margin: '10px 0',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  width: '100%', // inputs take full width of card


  padding: '15px', // 패딩 증가
  width: '100%', // 부모 요소(cardStyle)에 맞춰 너비 조정
};

const buttonStyle = {
  margin: '20px 0',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#35AE92',
  color: 'white',
  width: '100%', // button takes full width of card
  cursor: 'pointer',

  padding: '15px 20px', // 패딩 증가
  width: '100%', // 부모 요소(cardStyle)에 맞춰 너비 조정
};

const closeButtonStyle = {
  position: 'absolute', // or 'fixed' depending on your layout
  top: '20px',
  right: '20px',
  cursor: 'pointer',
  color: '#333',
  border: 'none',
  background: 'none',
  fontSize: '24px',
};

export const SignUp = () => {
  // 회원가입 로직을 여기에 작성하세요.
  const handleSignUp = () => {
    // 회원가입 처리
  };

  return (
    <div style={signUpStyle}>
      <div style={cardStyle}>
        <div style={textStyle}>회원가입하기</div>
        <input type="text" placeholder="닉네임" style={inputStyle} />
        <input type="email" placeholder="이메일 주소" style={inputStyle} />
        <input type="password" placeholder="비밀번호" style={inputStyle} />
        <button style={buttonStyle} onClick={handleSignUp}>회원가입하기</button>
      </div>
    </div>
  );
};
