const RightCardContent = (props) => {
  return (
    <div className="absolute bg-black/30 top-0 left-0 h-full w-ful flex flex-col justify-between p-6">
      <h2 className="bg-white text-[19px] rounded-full h-11 w-11 flex items-center justify-center">
        {props.id}
      </h2>
      <div>
        <p className="text-lg text-shadow-2xs leading-relaxed mb-14 text-white">
          {props.intro}
        </p>
        <div>
          <button
            style={{ backgroundColor: props.color }}
            className="text-white  px-7 py-2 rounded-full"
          >
            {props.tag}
          </button>
          <button
            style={{ backgroundColor: props.color }}
            className="text-white px-3 py-2 rounded-full"
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
