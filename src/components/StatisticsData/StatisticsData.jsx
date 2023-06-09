import { StatisticsItem } from "components/StatisticsItem/StatisticsItem";
import PropTypes from "prop-types";
import { StatList } from "./StatisticsData.styled";

export const StatisticsData = ({ stats }) => {
    return <StatList>
        {stats.map(({ id, label, percentage }) => (
            <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
    </StatList>;
}

StatisticsData.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}