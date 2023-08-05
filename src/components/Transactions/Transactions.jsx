import { Table, TableBody } from "./Transactions.styled";

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <TableBody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
