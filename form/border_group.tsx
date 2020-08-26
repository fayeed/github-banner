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
      <h1>Border Styles</h1>
      <FormGroup>
        <div>
          <InputLabel>Border Size</InputLabel>
          <Slider
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
