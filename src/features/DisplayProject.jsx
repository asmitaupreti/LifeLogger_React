import DisplaylistLayout from "../ui/DisplaylistLayout";
import { lifeproject } from "../data/lifeproject";
import { Card } from "../components";

const DisplayProject = ({ navigate }) => {
  return (
    <DisplaylistLayout>
      {lifeproject.map((item, index) => (
        <Card key={index} item={item} navigate={navigate} />
      ))}
    </DisplaylistLayout>
  );
};

export default DisplayProject;
