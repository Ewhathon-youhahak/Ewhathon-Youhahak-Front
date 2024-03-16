import React, { useState } from 'react';

function RadioButtonAndSearch() {
    // 선택된 카테고리 (과목명 또는 교수명)를 상태로 관리합니다.
    const [category, setCategory] = useState('subject'); // 'subject' 또는 'professor'
    // 검색어를 상태로 관리합니다.
    const [query, setQuery] = useState('');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(`Searching for ${category}: ${query}`);
        // 검색 로직을 여기에 추가합니다. 예: API 호출 등
    };

    // 인라인 스타일 정의
    const searchInputStyle = {
        width: '500px', // 검색창을 가로로 길게
        height: '2em', // 검색창의 세로 크기
        padding: '0.5em', // 내부 여백
    };

    const searchButtonStyle = {
        height: '2.5em', // 버튼의 세로 크기
        fontSize: '1em', // 버튼의 폰트 크기
        cursor: 'pointer', // 마우스 오버 시 커서 변경
    };

    return (
        <div style={{marginBottom: '30px'}}>
            <form onSubmit={handleSearch}>
                <div>
                    <label>
                        <input
                        type="radio"
                        value="subject"
                        checked={category === 'subject'}
                        onChange={handleCategoryChange}
                        />
                        &nbsp; 과목명 &nbsp; &nbsp; &nbsp; &nbsp;
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="professor"
                        checked={category === 'professor'}
                        onChange={handleCategoryChange}
                        />
                        &nbsp; 교수명
                    </label>
                </div>
                <div style={{ margin: '1em'}}>
                    <input
                        type="text"
                        value={query}
                        onChange={handleQueryChange}
                        placeholder={category === 'subject' ? '과목명 검색' : '교수명 검색'}
                        style={searchInputStyle}
                    />
                    <span style={{ margin: '0 0.5em' }}></span>
                    <button type="submit" style={searchButtonStyle}>&nbsp;검색&nbsp;</button>
                </div>
            </form>
            </div>

    );
}

export default RadioButtonAndSearch;