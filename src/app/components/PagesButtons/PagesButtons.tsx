import { useEffect, useState } from "react";
import {
  pageButtonPropsType,
  pagesButtonsPropsType,
} from "../../../common/utils/types";

function PagesButtons({
  id,
  paginationLength,
  paginationStart,
  setPaginationStart,
  dataSize,
}: pagesButtonsPropsType) {
  const floatSectionsNumber = dataSize / paginationLength;
  const sectionsNumber = Math.trunc(floatSectionsNumber);
  const pagesNumber =
    sectionsNumber < floatSectionsNumber ? sectionsNumber + 1 : sectionsNumber;
  const currentPageNumber = paginationStart / 10 + 1;
  let array = Array.from({ length: pagesNumber }, (_, i) => i);
  const [displayMode, setDisplayMode] = useState<
    "all" | "start" | "end" | "mid"
  >("all");

  useEffect(() => {
    detects();
  }, [paginationStart, paginationLength]);

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

  function detects() {
    if (pagesNumber <= 6) {
      setDisplayMode("all");
    } else {
      if ((paginationStart - 1) / 10 <= 3) {
        setDisplayMode("start");
      } else if ((paginationStart - 1) / 10 >= pagesNumber - 1 - 4) {
        setDisplayMode("end");
      } else {
        setDisplayMode("mid");
      }
    }
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
    if (i >= pagesNumber - 1 - 4 || i === 0) {
      return <PageButton key={i} i={i} />;
    }
    if (i === pagesNumber - 1 - 5) {
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
