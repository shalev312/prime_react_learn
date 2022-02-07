import { Column } from './Table';
import { User } from '../../api/userApi';
export const columns: Column<User>[] = [
  {
    field: 'username',
    header: 'Name',
    sort: true,
  },
  {
    field: 'email',
    header: 'Last',
  },
  {
    field: 'website',
    header: 'Age',
  },
  {
    field: 'position',
    header: 'Position',
  },
  {
    field: 'company',
    header: 'Company',
    render: ({ company, id }) => (
      <span
        data-testid={`table-column-company-${id}`}
        className="p-1 inline-block"
        style={{
          color: 'var(--main-orange)',
          borderRadius: '4px',
          border: '1px solid var(--main-orange)',
          background: 'var(--main-item)',
        }}
      >
        {company}
      </span>
    ),
  },
];
