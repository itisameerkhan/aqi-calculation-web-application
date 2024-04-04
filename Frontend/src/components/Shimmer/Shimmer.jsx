import "./Shimmer.scss";

const Shimmer = () => {
  return (
    <div className="shimmer">
      <div class="loader">
        <div class="box box-1">
          <div class="side-left"></div>
          <div class="side-right"></div>
          <div class="side-top"></div>
        </div>
        <div class="box box-2">
          <div class="side-left"></div>
          <div class="side-right"></div>
          <div class="side-top"></div>
        </div>
        <div class="box box-3">
          <div class="side-left"></div>
          <div class="side-right"></div>
          <div class="side-top"></div>
        </div>
        <div class="box box-4">
          <div class="side-left"></div>
          <div class="side-right"></div>
          <div class="side-top"></div>
        </div>
      </div>
      <p>Please wait, we are contacting servers...</p>
    </div>
  );
};

export default Shimmer;
