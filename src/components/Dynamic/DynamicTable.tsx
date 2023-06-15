type TableProps<T, K extends keyof T> = {
  data: Array<T>
  columns: Array<ColumnDefinitionType<T, K>>
}

export type ColumnDefinitionType<T, K extends keyof T> = {
  key: K
  header: string
}

type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<ColumnDefinitionType<T, K>>
}

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>
  columns: Array<ColumnDefinitionType<T, K>>
}

const TableHeader = <T, K extends keyof T>({
  columns,
}: TableHeaderProps<T, K>) => {
  const headers = columns.map((column, index) => {
    return <th key={`headCell-${index}`}>{column.header}</th>
  })

  return (
    <thead className='table-header-group'>
      <tr className=''>{headers}</tr>
    </thead>
  )
}

const TableRows = <T, K extends keyof T>({
  data,
  columns,
}: TableRowsProps<T, K>) => (
  <tbody className=''>
    {data.map((row, index) => (
      <tr key={`row-${index}`} className='table-row'>
        {columns.map((column, index2) => (
          <td key={`cell-${index2}`} className='table-cell'>
            {String(row[column.key])}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
)

export default function DynamicTable<T, K extends keyof T>({
  data,
  columns,
}: TableProps<T, K>) {
  return (
    <table className='table-compact table'>
      <TableHeader columns={columns} />
      <TableRows data={data} columns={columns} />
    </table>
  )
}
