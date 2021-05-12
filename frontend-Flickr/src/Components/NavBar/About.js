import { Link } from 'react-router-dom';

const About = () => (
  <div>
    <h4>Version 1.0.0</h4>
    <Link to="/">Go Back</Link>
    {/* link was an a component (anchor)
      to was href */}
  </div>
);

export default About;
