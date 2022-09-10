import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TableThead,
  TableBody,
  TableTitle,
  TableRow,
  TableCell,
  TableCellType,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <TableThead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </TableThead>

      <TableBody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TableCellType>{item.type}</TableCellType>
            <TableCell>{item.amount}</TableCell>
            <TableCell>{item.currency}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
