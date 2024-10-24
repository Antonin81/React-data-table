import { topSectionPropsType } from "../../../common/utils/types";
import EntriesSelect from "../EntriesSelect/EntriesSelect";

function TopSection({ id }: topSectionPropsType) {
  return (
    <div className="data-table-top-section">
      <EntriesSelect id={id} />
    </div>
  );
}

export default TopSection;
