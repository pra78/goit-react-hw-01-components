import PropTypes from "prop-types";
import { StatisticsData } from "components/StatisticsData/StatisticsData";
import { Header, StatisticsCard } from "./Statistics.styled";

export const Statistics = ({title, stats }) => {
    return <StatisticsCard>
        {title && <Header>{title}</Header>}
        <StatisticsData stats={stats} />
    </StatisticsCard>;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact ({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}