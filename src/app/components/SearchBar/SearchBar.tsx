import { useSearch } from "../../../common/contexts/searchContext";
import { searchBarPropsType } from "../../../common/utils/types";

function SearchBar({ id }: searchBarPropsType) {
  const { setWord } = useSearch();

  function searchInputHandler(e: React.FormEvent<HTMLInputElement>) {
    setWord((e.currentTarget as HTMLInputElement).value);
  }

  return (
    <label htmlFor={id + "_search"} className="data-table-search-bar">
      <span>Search : </span>
      <input
        type="search"
        id={id + "_search"}
        name={id + "_search"}
        aria-controls={id}
        onInput={searchInputHandler}
      />
    </label>
  );
}

export default SearchBar;
