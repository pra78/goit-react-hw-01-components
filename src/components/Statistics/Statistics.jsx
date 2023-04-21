import PropTypes from "prop-types";
import { StatisticsData } from "components/StatisticsData/StatisticsData";
import { StatisticsCard } from "./Statistics.styled";

export const Statistics = ({title, items }) => {
    return <StatisticsCard>
        {title && <h2>{title}</h2>}
        <StatisticsData items={items} />
    </StatisticsCard>;
}

Statistics.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.exact ({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}