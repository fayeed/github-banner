import React from "react";
import { FormGroup, InputLabel, Slider } from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";

export default function BorderGroup({
  border,
  setBorder,
}: {
  border: any;
  setBorder: any;
}) {
  return (
    <div style={{ marginTop: 40 }}>
      <h2>Border Styles</h2>
      <FormGroup>
        <div>
          <InputLabel>Border Size</InputLabel>
          <Slider
            min={0}
            max={10}
            value={border.size}
            onChange={(e, value) =>
              setBorder({
                ...border,
                size: value as number,
              })
            }
          />
        </div>
        <ColorPicker
          name="color"
          value={border.color}
          inputProps={{ value: border.color }}
          floatingLabelText="Border Color"
          onChange={(color) => setBorder({ ...border, color })}
        />
        <div>
          <InputLabel>Border Radius</InputLabel>
          <Slider
            min={0}
            max={50}
            value={border.radius}
            onChange={(e, value) =>
              setBorder({
                ...border,
                radius: value as number,
              })
            }
          />
        </div>
      </FormGroup>
    </div>
  );
}
