import { useState } from "react";
import { ArrowRightIcon, ArrowLeft } from "@/assets/icons";
import Button from "@/components/ui/button/Button";
import Search from "@/components/common/Search/Search";
import { EyeIcon, TrashBinIcon, EditIcon } from "@/assets/icons";
import DeleteModal from "@/components/common/DeleteModal/DeleteModal";
import { Modal } from "@/components/ui/modal";

import {
  TableProps,
  TableRowData,
} from "../types/types";

const Table = <T extends TableRowData>({
  columns,
  data,
  totalPages,
  currentPage,
  statusOptions,
  dropdowns = [],
  onBulkApply,
  theadClassName,
  actionConfig,
  showCheckbox = true,
  onPageChange,
  onSearch,

  // ** Props للتحكم في الـ selection من المكون الأب **
  selectedRows,
  setSelectedRows,
}: TableProps<T> & {
  selectedRows: T[];
  setSelectedRows: (rows: T[]) => void;
}) => {
  // حالة تحديد الكل بناءً على مقارنة طول المحددين وطول البيانات
  const selectAll = selectedRows.length === data.length && data.length > 0;

  const [dropdownValues, setDropdownValues] = useState<string[]>(dropdowns.map(() => ""));
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<T | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false);
  const [viewRow, setViewRow] = useState<T | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // إدارة التحديد: نضيف أو نحذف الكائن حسب وجوده
  const handleRowChange = (row: T) => {
    const isSelected = selectedRows.some(selected => selected.id === row.id);
    let newSelectedRows: T[];
    if (isSelected) {
      newSelectedRows = selectedRows.filter(selected => selected.id !== row.id);
    } else {
      newSelectedRows = [...selectedRows, row];
    }
    setSelectedRows(newSelectedRows);
  };

  // اختيار الكل أو إلغاء تحديد الكل
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data);
    }
  };

  const openViewModal = (row: T) => {
    setViewRow(row);
    setIsViewModalOpen(true);
  };

  const onSearchChange = (value: string) => {
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4 pb-4 flex-wrap">
        <div className="flex items-center flex-wrap gap-1">
          {statusOptions?.map((status, index) => (
            <div key={status} className="flex items-center gap-2">
              <button
                onClick={() => onSearch?.(status)}
                className={`py-2 text-sm ${statusOptions ? "underline text-brand-500" : "text-gray-500 dark:text-gray-300"}`}
              >
                {status}
              </button>
              {index < statusOptions?.length - 1 && (
                <div className="w-px h-4 bg-gray-300 dark:bg-white/20" />
              )}
            </div>
          ))}
        </div>
        <div className="relative w-64">
          <Search
            onChange={onSearchChange}
            placeholder="Search..."
            className="mb-4"
            value={searchTerm}
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 flex-wrap pb-6">
        <div className="flex items-center gap-1 flex-wrap">
          {dropdowns.map((dropdown, index) => (
            <select
              key={index}
              value={dropdownValues[index]}
              onChange={(e) => {
                const newValues = [...dropdownValues];
                newValues[index] = e.target.value;
                setDropdownValues(newValues);
                dropdown.onChange?.(e.target.value);
              }}
              className="px-2 py-2 border rounded-md text-sm bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-white"
            >
              <option value="" disabled hidden>
                {dropdown.value}
              </option>
              {dropdown?.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ))}
        </div>

        {onBulkApply && (
          <Button size="sm" variant="primary"
            onClick={() => onBulkApply?.({ dropdownValues, selectedRows })}
          >
            Apply
          </Button>
        )}
      </div>

      <div className="w-full rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-gray-900">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto divide-y divide-gray-200 dark:divide-white/[0.05]">
            <thead className="bg-gray-200 border-b border-gray-100 dark:bg-gray-800 dark:border-white/[0.05]">
              <tr className="text-start">
                {showCheckbox && (
                  <th className="sticky left-0 z-10 px-4 py-3 w-10 bg-gray-200 dark:bg-gray-800">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  </th>
                )}
                {columns?.map((col) => (
                  <th
                    key={col.key}
                    className={theadClassName ?? "py-3 font-lg text-brand-500 text-left dark:text-gray-400 whitespace-nowrap"}
                  >
                    {col.label}
                  </th>
                ))}
                {(actionConfig?.showEdit || actionConfig?.showDelete || actionConfig?.showView) && (
                  <th className="px-4 py-3 text-brand-500  dark:text-gray-400 text-start">Action</th>
                )}
              </tr>
            </thead>

            <tbody>
              {data?.map((row, index) => {
                const isChecked = selectedRows.some(selected => selected.id === row.id);
                return (
                  <tr
                    key={row.id ?? index}
                    className="border-b border-gray-200 dark:border-white/[0.05] hover:bg-gray-50 dark:hover:bg-white/[0.03]"
                  >
                    {showCheckbox && (
                      <td className="sticky left-0 z-10 px-4 py-3 w-10 bg-white dark:bg-gray-900">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleRowChange(row)}
                        />
                      </td>
                    )}

                    {columns?.map((col) => (
                      <td key={col.key} className="px-3 py-2">
                        {col.key === "Thumbnail" && typeof row[col.key as keyof T] === "string" && row[col.key as keyof T] ? (
                          <img
                            src={row[col.key as keyof T] as string}
                            alt="Thumbnail"
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          col.key === "Thumbnail" ? null : String(row[col.key as keyof T] ?? "")
                        )}
                      </td>
                    ))}

                    {(actionConfig?.showEdit || actionConfig?.showDelete || actionConfig?.showView) && (
                      <td className="px-4 py-2 flex gap-2 items-center text-center">
                        {actionConfig.showEdit && (
                          <button
                            onClick={() => {
                              setSelectedRow(row);
                              setIsEditModalOpen(true);
                            }}
                            className="text-yellow-500"
                            title="تعديل"
                          >
                            <EditIcon />
                          </button>
                        )}
                        {actionConfig.showView && (
                          <button
                            onClick={() => openViewModal(row)}
                            className="text-blue-500"
                            title="عرض"
                          >
                            <EyeIcon />
                          </button>
                        )}
                        {actionConfig.showDelete && (
                          <button
                            onClick={() => {
                              setSelectedRow(row);
                              setIsDeleteOpen(true);
                            }}
                            className="text-red-500"
                            title="حذف"
                          >
                            <TrashBinIcon />
                          </button>
                        )}
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {isEditModalOpen && selectedRow && (
        <Modal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          className="p-6 max-h-[90vh] overflow-y-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
        >
          <h2 className="text-xl font-bold mb-4  dark:text-gray-400">Edit</h2>

          {columns.map((col) => (
            <div className="mb-3" key={col.key}>
              <label className="block mb-1 text-sm text-gray-600  dark:text-gray-400">{col.label}</label>
              <input
                type="text"
                value={String(selectedRow[col.key as keyof T] ?? "")}
                onChange={(e) =>
                  setSelectedRow({ ...selectedRow, [col.key]: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md  dark:text-gray-400"
              />
            </div>
          ))}

          <div className="flex gap-4 mt-4">
            <Button onClick={() => setIsEditModalOpen(false)}>Close</Button>
            <Button
              onClick={() => {
                if (actionConfig?.onEdit) {
                  actionConfig.onEdit(selectedRow); // نرسل الصف بعد التعديل
                }
                setIsEditModalOpen(false);
              }}
              variant="primary"
            >
              Save
            </Button>
          </div>
        </Modal>
      )}

      {isDeleteOpen && selectedRow && (
        <DeleteModal
          isOpen={isDeleteOpen}
          onCancel={() => setIsDeleteOpen(false)}
          onConfirm={() => {
            if (actionConfig?.onDelete) {
              actionConfig.onDelete(selectedRow);
            }
            setIsDeleteOpen(false);
          }}
          title="Delete"
          message={`Are you sure to delete ${selectedRow[columns[0].key as keyof typeof selectedRow] ?? ""}؟`}
        />
      )}

      {isViewModalOpen && viewRow && (
        <Modal
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          className="max-w-md w-full p-6"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center dark:text-gray-400">
            View Details
          </h2>

          <div className="max-h-[70vh] overflow-y-auto pr-2">
            {viewRow.Thumbnail && typeof viewRow.Thumbnail === "string" && (
              <div className="flex justify-center mb-6">
                <img
                  src={viewRow.Thumbnail}
                  alt="User Thumbnail"
                  className="w-24 h-24 rounded-full object-cover border border-gray-300 shadow-sm"
                />
              </div>
            )}

            {columns
              .filter((col) => col.key !== "Thumbnail")
              .map((col) => (
                <div
                  className="mb-4 border-b border-gray-200 pb-3 last:border-none last:pb-0 dark:text-gray-400"
                  key={col.key}
                >
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    {col.label}
                  </label>
                  <p className="text-gray-900 text-base dark:text-gray-400">
                    {viewRow[col.key as keyof TableRowData]}
                  </p>
                </div>
              ))}
          </div>

          <div className="flex justify-end mt-6">
            <Button onClick={() => setIsViewModalOpen(false)}>Close</Button>
          </div>
        </Modal>
      )}

      <div className="flex justify-end items-center gap-2 pt-2">
        <button
          onClick={() => onPageChange?.(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-1 px-3 py-1 rounded text-brand-500  dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="w-4 h-4 text-brand-500  dark:text-white" />
          Prev
        </button>
        <span className="text-sm text-brand-500  dark:text-white">
          {currentPage} ... {totalPages}
        </span>
        <button
          onClick={() => onPageChange?.(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 px-3 py-1 rounded text-brand-500  dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
          <ArrowRightIcon className="w-4 h-4 text-brand-500  dark:text-white" />
        </button>
      </div>
    </div>
  );
};

export default Table;
