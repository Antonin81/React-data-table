import { useEffect, useMemo, useState } from "react";
import {
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

  const [displayMode, setDisplayMode] = useState<
    "all" | "start" | "end" | "mid"
  >("all");

  function PageButton({ i }: pageButtonPropsType) {
    function pageButtonHandleClick(i: number) {
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
        onClick={() => {
          pageButtonHandleClick(i);
        }}
        key={"page-button-" + i}
      >
        {i + 1}
      </button>
    );
  }

  const displayButtonStartMode = (i: number) => {
    if (i === pagesNumber - 1 || i <= 4) {
      return <PageButton key={i} i={i} />;
    }
    if (i === 5) {
      return (
        <span key={i} className="ellipsis">
          …
        </span>
      );
    }
  };
  const displayButtonEndMode = (i: number) => {
    if (i >= pagesNumber - 5 || i === 0) {
      return <PageButton key={i} i={i} />;
    }
    if (i === pagesNumber - 6) {
      return (
        <span key={i} className="ellipsis">
          …
        </span>
      );
    }
  };

  const displayButtonMidMode = (i: number) => {
    if (
      i === 0 ||
      i === pagesNumber - 1 ||
      i === currentPageNumber - 2 ||
      i === currentPageNumber - 1 ||
      i === currentPageNumber
    ) {
      return <PageButton key={i} i={i} />;
    }
    if (i === 1 || i === pagesNumber - 2) {
      return (
        <span key={i} className="ellipsis">
          …
        </span>
      );
    }
  };

  useEffect(() => {
    if (pagesNumber <= 6) {
      setDisplayMode("all");
    } else {
      if (currentPageNumber <= 4) {
        setDisplayMode("start");
      } else if (currentPageNumber >= pagesNumber - 3) {
        setDisplayMode("end");
      } else {
        setDisplayMode("mid");
      }
    }
  }, [paginationStart, paginationLength, pagesNumber, currentPageNumber]);

  if (displayMode === "all") {
    return (
      <span>
        {array.map((i) => (
          <PageButton key={i} i={i} />
        ))}
      </span>
    );
  }
  if (displayMode === "start") {
    return <span>{array.map((i) => displayButtonStartMode(i))}</span>;
  }
  if (displayMode === "end") {
    return <span>{array.map((i) => displayButtonEndMode(i))}</span>;
  }

  return <span>{array.map((i) => displayButtonMidMode(i))}</span>;
}
export default PagesButtons;
