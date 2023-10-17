import { Card } from "../components";
import { lifemilestone } from "../data/lifemilestone";
import DisplaylistLayout from "../ui/DisplaylistLayout";

const DisplayMilestone = ({ navigate }) => {
  return (
    <DisplaylistLayout>
      {lifemilestone.map((item, index) => (
        <Card key={index} item={item} navigate={navigate} />
      ))}
    </DisplaylistLayout>
  );
};

export default DisplayMilestone;
