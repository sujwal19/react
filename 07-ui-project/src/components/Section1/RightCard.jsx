import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full w-80 rounded-4xl shrink-0 overflow-hidden relative">
      <img className="object-cover h-full" src={props.img} alt="" />
      <RightCardContent
        tag={props.tag}
        intro={props.intro}
        id={props.id + 1}
        color={props.color}
      />
    </div>
  );
};

export default RightCard;
