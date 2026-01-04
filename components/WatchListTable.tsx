import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { WATCHLIST_TABLE_HEADER } from "@/lib/constants";

export default function WatchlistTable() {
  const sampleRows = [
    [
      "Apple Inc.",
      "AAPL",
      "$173.45",
      "+1.23%",
      "$2.7T",
      "28.5",
      "Upper 180",
      "Remove",
    ],
    [
      "Microsoft Corp.",
      "MSFT",
      "$380.12",
      "-0.45%",
      "$2.1T",
      "34.2",
      "Lower 360",
      "Remove",
    ],
    [
      "NVIDIA Corp.",
      "NVDA",
      "$650.30",
      "+2.10%",
      "$1.6T",
      "52.1",
      "Upper 700",
      "Remove",
    ],
  ];

  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {WATCHLIST_TABLE_HEADER.map((h) => (
              <TableHead key={h} className="text-left">
                {h}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleRows.map((row, idx) => (
            <TableRow key={idx}>
              {row.map((cell, i) => (
                <TableCell key={i} className="text-left">
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
