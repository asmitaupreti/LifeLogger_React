import { Card } from "../components";
import { lifeincident } from "../data/lifeincident";

import DisplaylistLayout from "../ui/DisplaylistLayout";

const DisplayIncident = ({ navigate }) => {
  return (
    <DisplaylistLayout>
      {lifeincident.map((item, index) => (
        <Card key={index} item={item} navigate={navigate} />
      ))}
    </DisplaylistLayout>
  );
};

export default DisplayIncident;
