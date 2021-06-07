import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../types/types";
import "../styles/pagination.scss";

type PaginationProps = {
  paginate: Function;
  clickPrev: (event: React.MouseEvent) => void;
  clickNext: (event: React.MouseEvent) => void;
  offset: number;
};

export const Pagination = memo(function Pagination({
  paginate,
  clickPrev,
  clickNext,
  offset,
}: PaginationProps) {
  const pageNumbers: Array<number> = [];
  const NUMBER_OF_PAGES_IN_VIEW = 5;
  const paginationData = useSelector(
    (state: RootState) => state.paginationReducer
  );
  const [prevButtonState, setPrevButtonState] = useState(false);
  const [nextButtonState, setNextButtonState] = useState(false);
  const currentPage = paginationData.currentPage;

  for (
    let i = offset;
    i < offset + NUMBER_OF_PAGES_IN_VIEW && i <= paginationData.pageCount;
    i++
  ) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    // disable prev button as there are no prev issues
    if (offset <= 1) {
      setPrevButtonState(true);
    } else if (prevButtonState === true && offset > 1) {
      setPrevButtonState(false);
    }
    // disable next button as there are no more issues
    if (offset >= paginationData.pageCount) {
      setNextButtonState(true);
    } else if (
      nextButtonState === true &&
      offset + 5 < paginationData.pageCount
    ) {
      setNextButtonState(false);
    }
  }, [
    offset,
    paginationData,
    nextButtonState,
    prevButtonState,
    setNextButtonState,
    setPrevButtonState,
  ]);

  return (
    <nav className="pagination">
      <ul className="page">
        <button
          className="page__button"
          disabled={prevButtonState}
          onClick={clickPrev}
        >{`<`}</button>
        {pageNumbers.map((number) => (
          <span key={number} onClick={() => paginate(number)}>
            <li
              key={number}
              className={currentPage === number ? "page_current" : ""}
            >
              {number}
            </li>
          </span>
        ))}
        <button
          className="page__btn"
          disabled={nextButtonState}
          onClick={clickNext}
        >{`>`}</button>
      </ul>
    </nav>
  );
});
