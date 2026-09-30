"use client";

import { useMemo, useState } from "react";
import { transactions, type Transaction } from "@/data/transactions";

type SortKey = keyof Transaction;
type SortDirection = "asc" | "desc";

const columns: Array<{ key: SortKey; label: string }> = [
  { key: "sector", label: "Sector" },
  { key: "project", label: "Project / Description" },
  { key: "partner", label: "Partner / Region" },
  { key: "country", label: "Country" },
  { key: "value", label: "Value" },
];

function compare(a: string, b: string) {
  return a.localeCompare(b, undefined, {
    numeric: true,
    sensitivity: "base",
  });
}

export function TransactionsTable() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return transactions;

    return transactions.filter((row) =>
      columns.some(({ key }) => row[key].toLowerCase().includes(q))
    );
  }, [query]);

  const sorted = useMemo(() => {
    if (!sortKey) return filtered;

    return [...filtered].sort((a, b) => {
      const result = compare(a[sortKey], b[sortKey]);
      return sortDirection === "asc" ? result : -result;
    });
  }, [filtered, sortDirection, sortKey]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * pageSize;
  const visibleRows = sorted.slice(startIndex, startIndex + pageSize);
  const from = sorted.length === 0 ? 0 : startIndex + 1;
  const to = Math.min(startIndex + pageSize, sorted.length);

  const setSearch = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const setRows = (value: number) => {
    setPageSize(value);
    setPage(1);
  };

  const changeSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
    setPage(1);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
    .filter((number) => {
      if (totalPages <= 7) return true;
      return (
        number === 1 ||
        number === totalPages ||
        Math.abs(number - currentPage) <= 1
      );
    });

  return (
    <section
      className="overflow-hidden rounded-sm border border-line bg-white"
      aria-labelledby="transaction-table-title"
      data-testid="transactions-table"
    >
      <div className="flex flex-col gap-5 border-b border-line p-5 md:p-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 id="transaction-table-title" className="h2">
            Strategic Advisory & Investment Transactions
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Search, sort and browse the published transaction record.
          </p>
        </div>

        <label className="block w-full lg:max-w-sm">
          <span className="mb-2 block text-sm font-medium text-navy">
            Search
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search transactions..."
            className="field"
            aria-label="Search transactions"
          />
        </label>
      </div>

      <div className="flex flex-col gap-4 border-b border-line px-5 py-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between md:px-6">
        <label className="inline-flex items-center gap-2">
          <span>Show</span>
          <select
            value={pageSize}
            onChange={(event) => setRows(Number(event.target.value))}
            className="rounded-sm border border-line bg-white px-2 py-1.5 text-ink focus:border-navy"
            aria-label="Rows per page"
          >
            {[10, 20, 50, 80].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <span>entries</span>
        </label>

        <span>
          Showing {from} to {to} of {sorted.length} entries
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1180px] border-collapse text-left text-[14px]">
          <thead>
            <tr className="border-b border-line bg-surface">
              {columns.map((column) => {
                const active = sortKey === column.key;
                return (
                  <th
                    key={column.key}
                    scope="col"
                    className="whitespace-nowrap px-4 py-3.5 font-semibold text-navy md:px-5"
                  >
                    <button
                      type="button"
                      onClick={() => changeSort(column.key)}
                      className="inline-flex items-center gap-2 text-left hover:text-gold-dark"
                      aria-label={`Sort by ${column.label}`}
                    >
                      {column.label}
                      <span aria-hidden="true" className="text-xs text-muted">
                        {active ? (sortDirection === "asc" ? "ASC" : "DESC") : ""}
                      </span>
                    </button>
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {visibleRows.map((row, index) => (
              <tr
                key={`${row.project}-${row.partner}-${startIndex + index}`}
                className="border-b border-line last:border-b-0 hover:bg-surface/70"
              >
                <td className="px-4 py-3.5 align-top text-ink md:px-5">
                  {row.sector}
                </td>
                <td className="px-4 py-3.5 align-top font-medium text-navy md:px-5">
                  {row.project}
                </td>
                <td className="px-4 py-3.5 align-top text-ink md:px-5">
                  {row.partner}
                </td>
                <td className="px-4 py-3.5 align-top text-ink md:px-5">
                  {row.country}
                </td>
                <td className="px-4 py-3.5 align-top whitespace-normal text-ink md:px-5">
                  {row.value}
                </td>
              </tr>
            ))}

            {visibleRows.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-5 py-12 text-center text-muted"
                >
                  No transactions match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1 border-t border-line px-5 py-4 sm:justify-end">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => setPage((value) => Math.max(1, value - 1))}
          className="rounded-sm px-3 py-2 text-sm text-ink hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>

        {pageNumbers.map((number, index) => {
          const previous = pageNumbers[index - 1];
          const showEllipsis = previous !== undefined && number - previous > 1;

          return (
            <span key={number} className="inline-flex items-center gap-1">
              {showEllipsis && (
                <span className="px-2 text-muted" aria-hidden="true">
                  ...
                </span>
              )}
              <button
                type="button"
                onClick={() => setPage(number)}
                aria-current={number === currentPage ? "page" : undefined}
                className={`min-w-9 rounded-sm px-3 py-2 text-sm ${
                  number === currentPage
                    ? "bg-navy text-white"
                    : "text-ink hover:bg-surface"
                }`}
              >
                {number}
              </button>
            </span>
          );
        })}

        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() =>
            setPage((value) => Math.min(totalPages, value + 1))
          }
          className="rounded-sm px-3 py-2 text-sm text-ink hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </section>
  );
}
