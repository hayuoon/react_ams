import React, { useEffect, useState } from 'react';

function GradedArticleList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/json/get_graded_article_list?mt_dept_cd=01&user_id=&grade_cd=00&date1=2025-01-06&date2=2025-07-05')
      .then(res => res.json())
      .then(json => {
        setData(json.eval_result || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (!data.length) return <div>데이터가 없습니다.</div>;

  return (
    <table border="1" cellPadding="5" style={{margin: '20px auto', minWidth: 600}}>
      <thead>
        <tr>
          <th>기사코드</th>
          <th>사용자ID</th>
          <th>이름</th>
          <th>섹션</th>
          <th>이름1</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={row.atc_cd || idx}>
            <td>{row.atc_cd}</td>
            <td>{row.user_id}</td>
            <td>{row.user_nm}</td>
            <td>{row.smt_hnm}</td>
            <td>{row.user_nm1}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GradedArticleList; 