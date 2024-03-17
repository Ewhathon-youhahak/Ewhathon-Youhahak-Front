import React, { useState, useEffect } from 'react';
import RadioButtonAndSearch from './radioButtonAndSearch';
import DocumentList from './documentList';
import axios from 'axios';

export const Home = () => {

    const [searchResults, setSearchResults] = useState([]);

    const handleSearchResults = (results) => {
        setSearchResults(results);
    };

    useEffect(() => {
        // 컴포넌트가 마운트될 때 필기 전체 목록을 불러옵니다.
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/notes`)
            .then(response => {
                setSearchResults(response.data);
            })
            .catch(error => {
                console.error('Failed to fetch notes:', error);
            });
    }, []);



    return (
        <div style={containerStyle}>

            <img src={`${process.env.PUBLIC_URL}/logo_notegather.png`} alt="NoteGather Logo" style={{ width: '150px', margin: '20px 0' }} />
            
            <RadioButtonAndSearch onSearch={handleSearchResults} />
            <div style={documentListContainerStyle}>
                <DocumentList documents={searchResults} />
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