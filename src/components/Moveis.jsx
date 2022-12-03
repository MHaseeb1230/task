import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
const Moveis = ({ data }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data.data]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {data.show ? (
        <div className="container mt-5 movies-main">
          <div className="row row-cols-lg-4 row-cols-md-3 row-cols-1">
            {currentItems && currentItems?.map((data, i) => {
              return (
                <>
                  <div className="col mb-3" key={data.imdbID}>
                    <div
                      className="card px-1 bg-dark"
                      style={{ height: "max-content" }}
                    >
                      <img
                        src={data?.Poster}
                        loading="lazy"
                        className=" card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title text-white text-center">
                          {data?.Title}
                        </h5>
                        <Link
                          to={`/details/${data.imdbID}`}
                          className="btn w-100 btn-primary"
                        >
                          Movies Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <p className="text-center my-5">Movies Not Found</p>
      )}

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
};

export default Moveis;
