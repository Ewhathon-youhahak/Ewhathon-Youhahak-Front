import React, { useState, useEffect } from 'react';
import DocumentList from './documentList';

// "내 정보" 텍스트 스타일
const profileHeaderStyle = {
  fontSize: '40px', // 글씨 크기 설정
  fontWeight: 'bold', // 글씨 두께 설정
  textAlign: 'center', // 가운데 정렬
  marginBottom: '40px', // 아래쪽 여백
};

const containerStyle = {
    flexDirection: 'column', // 세로 방향으로 요소 배치
    alignItems: 'space-between', 
    margin: '50px 100px 0 100px',
    };

const documentListContainerStyle = {
    alignSelf: 'flex-start', // DocumentList를 왼쪽으로 붙임
  };

const profileContainerStyle = {
    display: 'flex',
    flexDirection: 'row', // 여기를 변경했습니다
    alignItems: 'center', // 세로 중앙 정렬을 위해 추가했습니다
    justifyContent: 'space-evenly', // 좌측 정렬을 위해 start로 설정
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '300px',
    margin: 'auto',
};

const profileImageStyle = {
    width: '80px',
    height: '80px',
    backgroundColor: '#ccc',
    borderRadius: '8px',
    marginRight: '20px', // 사진과 닉네임 사이의 간격을 위해 추가했습니다
};

const profileNameStyle = {
  fontSize: '20px',
  color: '#333',
  justifyContent : 'center',
};

export const Mypage = () => {
  const [profile, setProfile] = useState({ imageUrl: '', nickname: '' });

  useEffect(() => {
    // 데이터베이스로부터 사용자 프로필을 로드하는 함수를 가정합니다.
    // 실제로는 여기서 API 호출을 통해 데이터를 가져올 것입니다.
    const fetchProfile = async () => {
      try {
        // 예시로 가정된 데이터입니다. 실제 API 응답을 사용해야 합니다.
        const profileData = {
          imageUrl: '/path/to/image', // 실제 이미지 URL을 사용해야 합니다.
          nickname: 'ssu22',
        };
        setProfile(profileData);
      } catch (error) {
        console.error('Fetching profile failed:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div style={{paddingTop: '50px',}}>

        <div style={profileHeaderStyle}>내 정보</div>

        <div style={profileContainerStyle}>
        
        <div style={profileImageStyle}>
            {/* 이미지가 있을 경우 img 태그로 렌더링합니다 */}
            {profile.imageUrl && <img src={profile.imageUrl} alt="Profile" style={{ width: '100%', height: '100%' }} />}
        </div>
        <div style={profileNameStyle}>{profile.nickname}</div>
        </div>

        <div style={containerStyle}>
            <div style={documentListContainerStyle}>
                <DocumentList />
            </div>
        </div>
            
    </div>
    
  );
};
