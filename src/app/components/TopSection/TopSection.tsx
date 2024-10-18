import { topSectionPropsType } from "../../../common/utils/types";
import EntriesSelect from "../EntriesSelect/EntriesSelect";

function TopSection({
  id,
  setPaginationLength,
  setPaginationStart,
}: topSectionPropsType) {
  return (
    <div className="data-table-top-section">
      <EntriesSelect
        id={id}
        setPaginationLength={setPaginationLength}
        setPaginationStart={setPaginationStart}
      />
    </div>
  );
}

export default TopSection;
