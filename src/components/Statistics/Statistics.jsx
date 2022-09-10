import PropTypes from 'prop-types';
import {
  StatisticsCard,
  StatsTitle,
  StatList,
  StatsItem,
  StatsLabel,
  StatsPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatList>
        {stats.map(stat => (
          <StatsItem id={stat.id} key={stat.id}>
            <StatsLabel>{stat.label}</StatsLabel>
            <StatsPercentage>{stat.percentage}%</StatsPercentage>
          </StatsItem>
        ))}
      </StatList>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
