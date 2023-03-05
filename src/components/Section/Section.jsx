import { Title, SectionEl } from "./Section.styled";
import PropTypes from 'prop-types';


export const Section = ({ title, children }) => {
  return (
    <SectionEl>
      <Title>{title}</Title>
      {children}
    </SectionEl>
  );
};


Section.propTypes = {
  Title: PropTypes.string,
  children: PropTypes.shape().isRequired
}