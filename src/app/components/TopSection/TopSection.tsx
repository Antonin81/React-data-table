import { topSectionPropsType } from "../../../common/utils/types";
import EntriesSelect from "../EntriesSelect/EntriesSelect";
import SearchBar from "../SearchBar/SearchBar";

function TopSection({ id }: topSectionPropsType) {
  return (
    <div className="data-table-top-section">
      <EntriesSelect id={id} />
      <SearchBar id={id} />
    </div>
  );
}

export default TopSection;
