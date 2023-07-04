import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  thumb: {
    color: "#000",
  },
  rail: {
    color: `rgba(0, 0, 0, 0.26)`,
  },
  track: {
    color: "#000",
  },
  valueLabelDisplay: {
    color: "#FFF",
  },
});

const PriceSlider = ({ value, changedPrice }) => {
  const classes = useStyles();
  const MIN = 0;
  const MAX = 1000;

  return (
    <>
      <div className={classes.root}>
        <Slider
          value={value}
          onChange={changedPrice}
          min={MIN}
          max={MAX}
          classes={{
            thumb: classes.thumb,
            rail: classes.rail,
            track: classes.track,
          }}
        />
      </div>
      <div>
        <span>
          ${value[0]} - ${value[1]}
        </span>
      </div>
    </>
  );
};

export default PriceSlider;
