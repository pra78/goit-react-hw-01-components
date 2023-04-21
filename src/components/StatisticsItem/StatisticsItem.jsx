import PropTypes from "prop-types";
import { ItemCard, Label, Percentage } from "./StatisticsItem.styled";

export const StatisticsItem = ({ label, percentage }) => {
    return <ItemCard>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
    </ItemCard>;
}

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}