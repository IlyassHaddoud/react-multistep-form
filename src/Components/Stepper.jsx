import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const Stepper = ({ percent }) => {
  return (
    <div className="stepper">
      <ProgressBar
        className="progressBar"
        percent={percent}
        filledBackground="cadetblue"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={"step " + (accomplished ? "accomplished" : "")}>
              1
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={"step " + (accomplished ? "accomplished" : "")}>
              2
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={"step " + (accomplished ? "accomplished" : "")}>
              3
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
};

export default Stepper;
