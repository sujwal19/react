const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
        <div className="relative h-45 w-54 overflow-hidden bg-white rounded-xl text-white">
          <img
            className="object-cover h-full w-full"
            src={props.elem.download_url}
            alt=""
          />
        </div>
        <h2 className="font-bold text-white text-lg m-4">
          {props.elem.author}
        </h2>
      </a>
    </div>
  );
};

export default Card;
