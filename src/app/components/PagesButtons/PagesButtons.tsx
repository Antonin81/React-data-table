import { useEffect, useMemo, useState } from "react";
import {
  displayButtonsPropsType,
  pageButtonPropsType,
  pagesButtonsPropsType,
} from "../../../common/utils/types";
import { usePagination } from "../../../common/contexts/paginationContext";

function PagesButtons({ id, dataSize }: pagesButtonsPropsType) {
  const { paginationStart, paginationLength, setPaginationStart } =
    usePagination();

  const currentPageNumber = paginationStart / paginationLength + 1;

  const pagesNumber = useMemo(() => {
    const floatSectionsNumber = dataSize / paginationLength;
    const sectionsNumber = Math.trunc(floatSectionsNumber);
    return sectionsNumber < floatSectionsNumber
      ? sectionsNumber + 1
      : sectionsNumber;
  }, [dataSize, paginationLength]);

  const array = useMemo(
    () => Array.from({ length: pagesNumber }, (_, i) => i),
    [pagesNumber]
  );

  const DISPLAY_STATES = {
    all: "all",
    start: "start",
    end: "end",
    mid: "mid",
  };

  const [displayMode, setDisplayMode] = useState<string>(DISPLAY_STATES.all);

  function PageButton({ i }: pageButtonPropsType) {
    function pageButtonHandleClick() {
      setPaginationStart(i * paginationLength);
    }
    return (
      <button
        className={
          "paginate_button" +
          (paginationStart / paginationLength === i ? " current" : "")
        }
        aria-controls={id}
        tabIndex={0}
        onClick={pageButtonHandleClick}
        key={"page-button-" + i}
      >
        {i + 1}
      </button>
    );
  }

  useEffect(() => {
    if (pagesNumber <= 6) {
      setDisplayMode(DISPLAY_STATES.all);
    } else {
      if (currentPageNumber <= 4) {
        setDisplayMode(DISPLAY_STATES.start);
      } else if (currentPageNumber >= pagesNumber - 3) {
        setDisplayMode(DISPLAY_STATES.end);
      } else {
        setDisplayMode(DISPLAY_STATES.mid);
      }
    }
  }, [paginationStart, paginationLength, pagesNumber, currentPageNumber]);

  function DisplayButtons({ array, displayMode }: displayButtonsPropsType) {
    let buttonsCondition: (i: number) => boolean;
    let ellipsisCondition: (i: number) => boolean;

    const isFirstButton = (i: number) => i === 0;
    const isLastButton = (i: number) => i === pagesNumber - 1;
    const isOneOfTheFourFirsts = (i: number) => i <= 4;
    const isTheFifth = (i: number) => i === 5;
    const isOneOfTheFourLasts = (i: number) => i >= pagesNumber - 5;
    const isTheFifthLast = (i: number) => i === pagesNumber - 6;
    const isTheSecond = (i: number) => i === 1;
    const isTheSecondLast = (i: number) => i === pagesNumber - 2;
    const isAroundTheSelectedOne = (i: number) =>
      i === currentPageNumber - 2 ||
      i === currentPageNumber - 1 ||
      i === currentPageNumber;

    if (displayMode === DISPLAY_STATES.all) {
      buttonsCondition = () => true;
      ellipsisCondition = () => false;
    }
    if (displayMode === DISPLAY_STATES.start) {
      buttonsCondition = (i: number) =>
        isLastButton(i) || isOneOfTheFourFirsts(i);
      ellipsisCondition = (i: number) => isTheFifth(i);
    }
    if (displayMode === DISPLAY_STATES.end) {
      buttonsCondition = (i: number) =>
        isOneOfTheFourLasts(i) || isFirstButton(i);
      ellipsisCondition = (i: number) => isTheFifthLast(i);
    }
    if (displayMode === DISPLAY_STATES.mid) {
      buttonsCondition = (i: number) =>
        isFirstButton(i) || isLastButton(i) || isAroundTheSelectedOne(i);
      ellipsisCondition = (i: number) => isTheSecond(i) || isTheSecondLast(i);
    }
    return (
      <span>
        {array.map((i) => {
          if (buttonsCondition(i)) {
            return <PageButton key={i} i={i} />;
          }
          if (ellipsisCondition(i)) {
            return (
              <span key={i} className="ellipsis">
                …
              </span>
            );
          }
        })}
      </span>
    );
  }

  return <DisplayButtons array={array} displayMode={displayMode} />;
}
export default PagesButtons;
