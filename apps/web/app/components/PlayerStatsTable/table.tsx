'use client'

import type { GridOptions, ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react'
import { type RoundStats } from 'database'
import { useMemo } from 'react'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

export function Table({
  roundStats
}: { roundStats: RoundStats[] }): JSX.Element {
  const colDefs = useMemo<ColDef[]>(() => [
    { field: 'game', headerName: 'Game' },
    { field: 'opponent', headerName: 'Opponent' },
    { field: 'roundnumber', headerName: 'Round' },
    { field: 'year', headerName: 'Year' },
    { field: 'handballs', headerName: 'HB' },
    { field: 'kicks', headerName: 'K' },
    { field: 'tackles', headerName: 'T' },
    { field: 'freekicksagainst', headerName: 'FA' },
    { field: 'freekicksfor', headerName: 'FF' },
    { field: 'goals', headerName: 'G' },
    { field: 'behinds', headerName: 'B' },
    { field: 'fantasypoints', headerName: 'Pts' },
  ], [])

  const gridOptions = useMemo<GridOptions>(() => ({
    autoSizeStrategy: {
      type: 'fitGridWidth',
    }
  }), [])

  return (
    <div className='ag-theme-alpine-auto-dark' style={{ height: '60dvh' }}>
      <AgGridReact columnDefs={colDefs} gridOptions={gridOptions} rowData={roundStats} />
    </div>
  )
}
