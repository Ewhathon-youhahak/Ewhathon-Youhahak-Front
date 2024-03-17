import React from 'react';
import { Link } from 'react-router-dom'; // react-router-dom을 사용하여 라우팅

// // 예시 데이터, 실제로는 데이터베이스에서 가져온 데이터를 사용해야 함
// const documents = [
//   {
//     id: 'doc1',
//     userId: 'boobu',
//     title: '서비스 경영 2주차 전사노트',
//     subject: '서비스 경영',
//     professor: '이종호 교수님',
//     date: '2024년 3월 2일'
//   },
//   // 더 많은 문서 객체...
// ];

// 스타일 객체 정의
const documentStyle = {
    marginBottom: '20px',
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

function DocumentList({ documents }) {
  return (
    <div>
      {documents.map((doc) => (
        <div key={doc.id}  style={documentStyle}>
          <div style={userIdStyle}>{doc.userId}</div>
          <div style={titleStyle}>{doc.title}</div>
          <div style={infoStyle}>{doc.subject} | {doc.professor}</div>
          <div>{doc.date}</div>
          <Link to={`/documents/${doc.id}`}>보러가기 →</Link>
        </div>
      ))}
    </div>
  );
}

export default DocumentList;