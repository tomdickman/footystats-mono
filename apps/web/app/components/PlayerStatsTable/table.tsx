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
    { field: 'game', headerName: 'Game', headerTooltip: 'Career Game Number' },
    { field: 'opponent', headerName: 'Opponent', headerTooltip: 'Opponent' },
    { field: 'roundnumber', headerName: 'Round', headerTooltip: 'Season Round Number' },
    { field: 'year', headerName: 'Year', headerTooltip: 'Year' },
    { field: 'handballs', headerName: 'HB', headerTooltip: 'Handballs' },
    { field: 'kicks', headerName: 'K', headerTooltip: 'Kicks' },
    { field: 'tackles', headerName: 'T', headerTooltip: 'Tackles' },
    { field: 'freekicksagainst', headerName: 'FA', headerTooltip: 'Free Kicks Against' },
    { field: 'freekicksfor', headerName: 'FF', headerTooltip: 'Free Kicks For' },
    { field: 'goals', headerName: 'G', headerTooltip: 'Goals' },
    { field: 'behinds', headerName: 'B', headerTooltip: 'Behinds' },
    { field: 'fantasypoints', headerName: 'Pts', headerTooltip: 'Fantasy Points' },
  ], [])

  const gridOptions = useMemo<GridOptions>(() => ({
    autoSizeStrategy: {
      type: 'fitGridWidth',
      defaultMinWidth: 75
    }
  }), [])

  return (
    <div className='ag-theme-alpine-auto-dark' style={{ height: '60dvh' }}>
      <AgGridReact columnDefs={colDefs} gridOptions={gridOptions} rowData={roundStats} />
    </div>
  )
}
