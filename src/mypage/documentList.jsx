import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // react-router-dom을 사용하여 라우팅
import axios from 'axios'; // axios import 추가


// 예시 데이터, 실제로는 데이터베이스에서 가져온 데이터를 사용해야 함
const documents = [
  {
    id: 'doc1',
    userId: 'boobu',
    title: '서비스 경영 2주차 전사노트',
    subject: '서비스 경영',
    professor: '이종호 교수님',
    date: '2024년 3월 2일'
  },
  // 더 많은 문서 객체...
];

// 스타일 객체에 버튼 관련 스타일 추가
const buttonStyle = {
  padding: '5px 10px',
  marginLeft: '20px',
  cursor: 'pointer',
};

const buttonContainerStyle = {
    display: 'flex', // 버튼들을 가로로 나열하기 위해 flex를 추가합니다.
    height: '30px',
    alignItems: 'center',
  };

// 스타일 객체 정의
const documentStyle = {
    marginBottom: '20px',
    display: 'flex', // 이 부분을 추가하여 flex 컨테이너로 만듭니다.
  justifyContent: 'space-between', // 내용과 버튼을 양쪽 끝으로 정렬합니다.
  alignItems: 'center', 
    };

const userIdStyle = {
    color: '#888', // 회색
    fontSize: '12px', // 작은 크기
    };

const titleStyle = {
    fontWeight: 'bold', // 진한 글씨
    fontSize: '25px', // 큰 크기
    marginTop: '5px', // 제목과 내용 사이에 마진 추가
    };

const infoStyle = {
    marginTop: '20px', // 내용과 버튼 사이에 마진 추가
    marginBottom : '20px',
    };

const linkStyle = {
    color: '#35AE92',
    };

function DocumentList() {

    const navigate = useNavigate();
    const [documents, setDocuments] = useState(initialDocuments); // 문서 목록 상태

    // 문서 수정 페이지로 이동하는 함수
    const handleEdit = (note_id) => {
        navigate(`/api/notes/${note_id}`); // 여기에 지정한 경로를 사용하세요
    };

    // 문서 삭제 로직을 처리하는 함수
    const handleDelete = async (docId) => {
      try {
        const response = await axios.delete(`/api/notes/${docId}`);
        console.log('Delete response:', response.data);
        alert('문서가 성공적으로 삭제되었습니다.');
  
        // 삭제된 항목을 UI에서 제거
        const updatedDocuments = documents.filter(doc => doc.id !== docId);
        setDocuments(updatedDocuments); // 상태 업데이트
  
      } catch (error) {
        console.error('문서 삭제에 실패했습니다:', error);
        alert('문서를 삭제하는 데 실패했습니다.');
      }
    };

  return (
    <div>
      {documents.map((doc) => (
        <div key={doc.id}  style={documentStyle}>
            <div>
                <div style={userIdStyle}>{doc.userId}</div>
                <div style={titleStyle}>{doc.title}</div>
                <div style={infoStyle}>{doc.subject} | {doc.professor}</div>
                <div>{doc.date}</div>
                <Link to={`/documents/${doc.id}`}>보러가기 →</Link>
            </div>
            <div style={buttonContainerStyle}>
                <button onClick={() => handleEdit(doc.id)} style={buttonStyle}>수정하기</button>
                <button onClick={() => handleDelete(doc.id)} style={{...buttonStyle, backgroundColor:'#35AE92', color: 'white'}}>삭제하기</button>
            </div>
        </div>
      ))}
    </div>
  );
}

export default DocumentList;