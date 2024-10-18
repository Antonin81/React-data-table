import { useEffect, useState } from "react";
import { pagesButtonsPropsType } from "../../../common/utils/types";

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
  const [displayMode, setDisplayMode] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    detects();
  }, [paginationStart, paginationLength]);

  function pageButtonHandleClick(i: number) {
    setPaginationStart(i * paginationLength);
  }

  function PageButton(i: number) {
    return (
      <a
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
      </a>
    );
  }

  function detects() {
    if (pagesNumber <= 6) {
      // console.log("afficher tout");
      setDisplayMode(0);
    } else {
      if ((paginationStart - 1) / 10 <= 3) {
        // console.log(
        //   "si 0 <= x <= 3 j'affiche de 0 à 4 et n, et je mets ... en n-1"
        // );
        setDisplayMode(1);
      } else if ((paginationStart - 1) / 10 >= pagesNumber - 1 - 4) {
        // console.log(
        //   "si n-3 <= x <= n j'affiche de n-4 à n et 0, et je mets ... en 1"
        // );
        setDisplayMode(2);
      } else {
        // console.log("si 4 <= x <= n-4 j'affiche 0, de x-1 à x+1, et n.");
        setDisplayMode(3);
      }
    }
  }
  return (
    <span>
      {displayMode === 0
        ? array.map((i) => PageButton(i))
        : displayMode === 1
        ? array.map((i) => {
            if (i === pagesNumber - 1 || i <= 4) {
              return PageButton(i);
            }
            if (i === 5) {
              return <span className="ellipsis">…</span>;
            }
          })
        : displayMode === 2
        ? array.map((i) => {
            if (i >= pagesNumber - 1 - 4 || i === 0) {
              return PageButton(i);
            }
            if (i === pagesNumber - 1 - 5) {
              return <span className="ellipsis">…</span>;
            }
          })
        : array.map((i) => {
            if (
              i === 0 ||
              i === pagesNumber - 1 ||
              i === currentPageNumber - 2 ||
              i === currentPageNumber - 1 ||
              i === currentPageNumber
            ) {
              return PageButton(i);
            }
            if (i === 1 || i === pagesNumber - 2) {
              return <span className="ellipsis">…</span>;
            }
          })}
    </span>
  );
}
export default PagesButtons;
