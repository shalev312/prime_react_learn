import { render, screen } from '@testing-library/react';
import Table from './Table';
import { columns } from './DetailColumns';

const DUMMY_ITEMS = [
  {
    id: 1,
    username: 'AAA',
    email: 'test@test.com',
    website: 'appsforce.io',
    position: 'Frontend',
    company: 'Appsforce',
  },
  {
    id: 2,
    username: 'Shalev 2',
    email: 'test2@test.com',
    website: 'appsforce.io',
    position: 'Frontend',
    company: 'Appsforce',
  },
];
describe('on click the table is sorted', () => {
  it('verify the amount of the elements', () => {
    render(<Table data={DUMMY_ITEMS} columns={columns} header="Details" />);
    const firstColumn = screen.getAllByTestId('table-column-username', {
      exact: false,
    });
    expect(firstColumn.length).toBe(2);
  });

  it('verify the order on sorting', () => {
    render(<Table data={DUMMY_ITEMS} columns={columns} header="Details" />);
    const buttonSort = screen.getByRole('columnheader', { name: /name/i });
    const firstColumn = screen.getAllByTestId('table-column-username', {
      exact: false,
    });
    expect(buttonSort).toHaveAttribute('aria-sort', 'none');
    expect(firstColumn[0]).toHaveTextContent('AAA');
    expect(firstColumn[1]).toHaveTextContent('Shalev 2');
    buttonSort.click();
    buttonSort.click();
    expect(buttonSort).not.toHaveAttribute('aria-sort', 'none');
    expect(firstColumn[0]).toHaveTextContent('Shalev 2');
    expect(firstColumn[1]).toHaveTextContent('AAA');
  });
});
