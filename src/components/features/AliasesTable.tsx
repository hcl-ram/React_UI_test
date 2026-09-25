import { Pencil, Trash2, Shuffle, Check } from "lucide-react";
import type { Alias, AliasFieldKey } from "@/types";
import { IconButton } from "@/components/ui/IconButton";

interface AliasesTableProps {
  aliases: Alias[];
  onEditToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onTransfer: (id: string) => void;
  onFieldChange: (id: string, field: AliasFieldKey, value: string) => void;
}

export function AliasesTable({
  aliases,
  onEditToggle,
  onDelete,
  onTransfer,
  onFieldChange,
}: AliasesTableProps) {
  if (aliases.length === 0) {
    return (
      <div className="p-6 text-center text-sm text-gray-500 bg-white">
        No aliases. Click the + button to add one.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white">
      <table
        className="w-full border-collapse"
        role="table"
        aria-label="Patient aliases"
      >
        <thead>
          <tr className="border-b border-borderGray">
            <th className="text-left text-[13px] font-bold text-[#222] px-3 py-2.5 border-r border-borderGray">
              Last
            </th>
            <th className="text-left text-[13px] font-bold text-[#222] px-3 py-2.5 border-r border-borderGray">
              First
            </th>
            <th className="text-left text-[13px] font-bold text-[#222] px-3 py-2.5 border-r border-borderGray">
              Middle
            </th>
            <th className="text-left text-[13px] font-bold text-[#222] px-3 py-2.5 border-r border-borderGray">
              Suffix
            </th>
            <th className="text-right text-[13px] font-bold text-[#222] px-3 py-2.5 w-[140px]">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {aliases.map((alias) => (
            <AliasRow
              key={alias.id}
              alias={alias}
              onEditToggle={onEditToggle}
              onDelete={onDelete}
              onTransfer={onTransfer}
              onFieldChange={onFieldChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface AliasRowProps {
  alias: Alias;
  onEditToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onTransfer: (id: string) => void;
  onFieldChange: (id: string, field: AliasFieldKey, value: string) => void;
}

function AliasRow({
  alias,
  onEditToggle,
  onDelete,
  onTransfer,
  onFieldChange,
}: AliasRowProps) {
  const editing = !!alias.isEditing;

  const cellCls =
    "px-3 py-2.5 text-[13px] text-textPrimary border-r border-[#eeeeee] align-middle";

  const renderCell = (field: AliasFieldKey) => {
    if (editing) {
      return (
        <input
          type="text"
          value={alias[field]}
          onChange={(e) => onFieldChange(alias.id, field, e.target.value)}
          className="w-full rounded-[3px] border border-borderGray bg-white px-2 py-1 text-[13px] focus:outline-none focus:border-successGreen focus:ring-1 focus:ring-successGreen"
          aria-label={`${field} name`}
        />
      );
    }
    return alias[field] || <span className="text-gray-400">—</span>;
  };

  return (
    <tr className="border-b border-[#eeeeee] bg-white hover:bg-[#fafafa]">
      <td className={cellCls}>{renderCell("last")}</td>
      <td className={cellCls}>{renderCell("first")}</td>
      <td className={cellCls}>{renderCell("middle")}</td>
      <td className={cellCls}>{renderCell("suffix")}</td>
      <td className="px-3 py-2.5 text-right w-[140px]">
        <div className="flex items-center justify-end gap-1.5">
          <IconButton
            tone="success"
            icon={
              editing ? <Check size={14} /> : <Pencil size={14} />
            }
            label={editing ? "Save row" : "Edit alias"}
            onClick={() => onEditToggle(alias.id)}
          />
          <IconButton
            tone="warning"
            icon={<Trash2 size={14} />}
            label="Delete alias"
            onClick={() => {
              if (window.confirm("Delete this alias?")) {
                onDelete(alias.id);
              }
            }}
          />
          <IconButton
            tone="success"
            icon={<Shuffle size={14} />}
            label="Transfer alias to primary name"
            onClick={() => onTransfer(alias.id)}
          />
        </div>
      </td>
    </tr>
  );
}
