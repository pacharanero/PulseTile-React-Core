import { formatYesNo } from "../../../utils/table-helpers/table.utils";


export const contactsColumnsConfig = [
  { key: 'name', title: 'Name', width: '28%' },
  { key: 'relationship', title: 'Relationship',  width: '28%' },
	{ key: 'nextOfKin', title: 'Next Of Kin', transformer: formatYesNo, width: '25%' },
	{ key: 'source', title: 'Source', width: '19%' },
	{ key: 'sourceId', title: 'SourceID', width: 0 },
];

export const defaultColumnsSelected = {
	name: true,
	relationship: true,
	nextOfKin: true,
	source: true,
  sourceId: true,
};
