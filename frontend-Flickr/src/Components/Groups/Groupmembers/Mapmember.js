// eslint-disable-next-line import/no-cycle
import Members from './Member';

const Mapmember = ({ memberData }) => (
  <div className="memberContainer" style={{ justifyContent: 'space-between' }}>
    {memberData.map((pDetails) => (<Members key={pDetails.id} pCard={pDetails} />
    ))}
  </div>
);
export default Mapmember;
