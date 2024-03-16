import React from 'react';
// import Example from './example';
import RadioButtonAndSearch from './radioButtonAndSearch';
import DocumentList from './documentList';

export const Home = () => {
    return (
        <div style={containerStyle}>

            <img src={`${process.env.PUBLIC_URL}/logo_notegather.png`} alt="NoteGather Logo" style={{ width: '150px', margin: '20px 0' }} />
            
            <RadioButtonAndSearch />
            <div style={documentListContainerStyle}>
                <DocumentList />
            </div>
        </div>
    );
};

const containerStyle = {
    display: 'flex', // 가로 정렬을 위해 flex 사용
    flexDirection: 'column', // 세로 방향으로 요소 배치
    alignItems: 'center', // 모든 요소를 가로 기준 가운데 정렬
    margin: '50px 100px 0 100px',
    };

const documentListContainerStyle = {
    alignSelf: 'flex-start', // DocumentList를 왼쪽으로 붙임
  };