import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column as ColumnPrime } from 'primereact/column';
import ConditionalWrapper from '../../share/utils/ConditionalWrapper';
import Tooltip from '../../share/UIElements/Tooltip/Tooltip';
import './Table.css';

export interface Column<T> {
  field: keyof T | 'action';
  header: string;
  sort?: boolean;
  tooltip?: boolean;
  render?: (item: T) => JSX.Element;
}

interface Props<T> {
  data?: T[];
  columns?: Column<T>[];
  header?: any;
}

const Table = <T extends { id: string | number }>({
  data,
  columns,
  header,
}: Props<T>) => {
  const renderCellBody = (column: Column<T>, rowData: T) => {
    const cellData = rowData[column.field as keyof T];
    const tooltipWrapper = (children: JSX.Element) => (
      <Tooltip id={`${column.field}-${rowData.id}`} content={`${cellData}`}>
        {children}
      </Tooltip>
    );
    return (
      <ConditionalWrapper condition={!!column.sort} wrapper={tooltipWrapper}>
        {column.render ? (
          column.render(rowData)
        ) : (
          <span data-testid={`table-column-${column.field}-${rowData.id}`}>
            {cellData}
          </span>
        )}
      </ConditionalWrapper>
    );
  };

  const renderCellData = (column: Column<T>, index: number) => (
    <ColumnPrime
      key={index}
      field={`${column.field}`}
      header={column.header}
      sortable={column.sort}
      body={(rowData: T) => renderCellBody(column, rowData)}
    />
  );
  const columnsTable = columns?.map((item, index) =>
    renderCellData(item, index)
  );
  return (
    <div>
      <div className="card">
        <DataTable value={data || []} header={header} responsiveLayout="scroll">
          {columnsTable}
        </DataTable>
      </div>
    </div>
  );
};

export default Table;
