import { TransactionItem } from "components/TransactionItem/TransactionItem";
import PropTypes from "prop-types";
import { THead, TransactionHistoryTable } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
    return <TransactionHistoryTable>
        <thead>
            <tr>
                <THead>Type</THead>
                <THead>Amount</THead>
                <THead>Currency</THead>
            </tr>
        </thead>

        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <TransactionItem key={id} type={type} amount={amount} currency={currency} />
            ))}
        </tbody>
    </TransactionHistoryTable>;
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}