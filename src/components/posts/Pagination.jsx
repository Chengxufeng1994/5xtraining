import React from 'react';

const Pagination = ({ posts, currentPage, postsPerPage, paginate }) => {
  const pageNumber = [];
  const totalPage = posts.length;

  for (let i = 1; i <= Math.ceil(totalPage / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="text-center">
      <ul>
        <li onClick={() => paginate(1)}>首頁</li>
        <li onClick={() => paginate(currentPage + 1)}>下一頁</li>
        <li onClick={() => paginate(Math.ceil(totalPage / postsPerPage))}>
          末頁
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
