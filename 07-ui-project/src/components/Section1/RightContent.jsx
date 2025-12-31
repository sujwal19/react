import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div
      id="right"
      className="p-6 h-full overflow-x-auto w-2/3 flex-nowrap flex gap-10"
    >
      {props.users.map(function (elem, idx) {
        console.log(elem.img);

        return (
          <RightCard
            key={idx}
            id={idx}
            img={elem.img}
            tag={elem.tag}
            intro={elem.intro}
            color={elem.color}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
