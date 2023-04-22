import PropTypes from "prop-types";
import { TransactionItemRow } from "./TransactionItem.styled";

export const TransactionItem = ({type, amount, currency}) => {
    return <TransactionItemRow>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </TransactionItemRow>;
};

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}
