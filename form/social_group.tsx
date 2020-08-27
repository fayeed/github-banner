import React from "react";
import {
  FormGroup,
  InputLabel,
  Slider,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";

export default function SocialGroup({
  socialStyles,
  setSocailStyles,
}: {
  socialStyles: any;
  setSocailStyles: any;
}) {
  return (
    <div style={{ marginTop: 40 }}>
      <h2>Social Styles</h2>
      <FormGroup>
        <div>
          <InputLabel>Social Font Size</InputLabel>
          <Slider
            min={14}
            max={32}
            value={socialStyles.fontSize}
            onChange={(e, value) =>
              setSocailStyles({
                ...socialStyles,
                fontSize: value as number,
              })
            }
          />
        </div>
        <InputLabel>Social Font Weight</InputLabel>
        <Select
          value={socialStyles.fontWeight}
          onChange={(e) =>
            setSocailStyles({
              ...socialStyles,
              fontWeight: e.target.value as string,
            })
          }
        >
          <MenuItem value="100">100</MenuItem>
          <MenuItem value="300">300</MenuItem>
          <MenuItem value="500">500</MenuItem>
          <MenuItem value="700">700</MenuItem>
        </Select>
        <TextField
          label="Social Line Height"
          type="number"
          placeholder="enter your title here..."
          value={socialStyles.lineHeight}
          onChange={(e) =>
            setSocailStyles({
              ...socialStyles,
              lineHeight: e.target.value,
            })
          }
        />
        <ColorPicker
          name="color"
          inputProps={{ value: socialStyles.iconColor }}
          onChange={(color) =>
            setSocailStyles({ ...socialStyles, iconColor: color })
          }
        />
        <ColorPicker
          name="color"
          value={socialStyles.color}
          inputProps={{ value: socialStyles.color }}
          floatingLabelText="Social text color"
          onChange={(color) => setSocailStyles({ ...socialStyles, color })}
        />
      </FormGroup>
    </div>
  );
}
