import React from "react";
import {
  FormGroup,
  InputLabel,
  Slider,
  Select,
  MenuItem,
  TextField,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";

export default function SubheadingGroup({
  subheadingStyles,
  setSubHeadingStyles,
}: {
  subheadingStyles: any;
  setSubHeadingStyles: any;
}) {
  return (
    <div style={{ marginTop: 40 }}>
      <h2>Subheading Styles</h2>
      <FormGroup>
        <div>
          <InputLabel>SubHeading Font Size</InputLabel>
          <Slider
            min={12}
            max={36}
            value={subheadingStyles.fontSize}
            onChange={(e, value) =>
              setSubHeadingStyles({
                ...subheadingStyles,
                fontSize: value as number,
              })
            }
          />
        </div>
        <InputLabel>SubHeading Font Weight</InputLabel>

        <Select
          value={subheadingStyles.fontWeight}
          onChange={(e) =>
            setSubHeadingStyles({
              ...subheadingStyles,
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
          label="Subheading Line Height"
          type="number"
          placeholder="enter your title here..."
          value={subheadingStyles.lineHeight}
          onChange={(e) =>
            setSubHeadingStyles({
              ...subheadingStyles,
              lineHeight: e.target.value,
            })
          }
        />
        <div style={{ marginTop: 16, marginBottom: 16 }}>
          <InputLabel>Subheading Alignment</InputLabel>
          <Select
            value={subheadingStyles.textAlign}
            onChange={(e) =>
              setSubHeadingStyles({
                ...subheadingStyles,
                textAlign: e.target.value as string,
              })
            }
          >
            <MenuItem value="start">Start</MenuItem>
            <MenuItem value="center">Center</MenuItem>
            <MenuItem value="end">End</MenuItem>
          </Select>
        </div>
        <InputLabel>Subheading Color</InputLabel>
        <ColorPicker
          name="color"
          defaultValue="#000"
          value={subheadingStyles.color}
          onChange={(color) =>
            setSubHeadingStyles({ ...subheadingStyles, color })
          }
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <InputLabel>Subheading 3d</InputLabel>
          <Switch
            type="checkbox"
            placeholder="enter your title here..."
            checked={subheadingStyles.thirdDim}
            onChange={(e) =>
              setSubHeadingStyles({
                ...subheadingStyles,
                thirdDim: e.target.checked,
              })
            }
          />
        </div>
      </FormGroup>
    </div>
  );
}
