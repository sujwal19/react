const App = () => {
  function onBtnClick(val) {
    if (val < 0) {
      console.log("negative scroll: ", val.toFixed(2));
    } else {
      console.log("positive scroll: ", val.toFixed(2));
    }
  }
  function onMouseChange(val) {
    console.log(val);
  }

  return (
    <div>
      <button
        onClick={function (elem) {
          onBtnClick(elem);
        }}
      >
        JS
      </button>
      <input
        onChange={function (elem) {
          onMouseChange(elem.target.value);
        }}
        onClick={(elem) => {
          onBtnClick("input clicked");
        }}
        type="text"
      />
      <div
        onWheel={(e) => {
          onBtnClick(e.deltaY);
        }}
        className="box"
      ></div>
    </div>
  );
};

export default App;
