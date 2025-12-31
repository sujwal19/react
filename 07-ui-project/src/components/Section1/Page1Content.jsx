import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = (props) => {
  return (
    <div className="h-[90vh] pb-16 pt-6 px-18 flex items-center justify-between gap-2.5">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1Content;
