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

export default function HeadingGroup({
  headingStyles,
  setHeadingStyles,
}: {
  headingStyles: any;
  setHeadingStyles: any;
}) {
  return (
    <div style={{ marginTop: 40 }}>
      <h1>Heading Styles</h1>
      <FormGroup>
        <div>
          <InputLabel>Heading Font Size</InputLabel>
          <Slider
            value={headingStyles.fontSize}
            onChange={(e, value) =>
              setHeadingStyles({
                ...headingStyles,
                fontSize: value as number,
              })
            }
          />
        </div>

        <InputLabel>Heading Font Weight</InputLabel>

        <Select
          value={headingStyles.fontWeight}
          onChange={(e) =>
            setHeadingStyles({
              ...headingStyles,
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
          label="Heading Line Height"
          type="number"
          placeholder="enter your title here..."
          value={headingStyles.lineHeight}
          onChange={(e) =>
            setHeadingStyles({ ...headingStyles, lineHeight: e.target.value })
          }
        />
        <div style={{ marginTop: 16, marginBottom: 16 }}>
          <InputLabel>Heading Align Items</InputLabel>
          <Select
            value={headingStyles.textAlign}
            onChange={(e) =>
              setHeadingStyles({
                ...headingStyles,
                textAlign: e.target.value as string,
              })
            }
          >
            <MenuItem value="start">Start</MenuItem>
            <MenuItem value="center">Center</MenuItem>
            <MenuItem value="end">End</MenuItem>
          </Select>
        </div>
        <InputLabel>Heading Color</InputLabel>
        <ColorPicker
          name="color"
          defaultValue="#000"
          value={headingStyles.color}
          onChange={(color) => setHeadingStyles({ ...headingStyles, color })}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <InputLabel>Heading 3d</InputLabel>
          <Switch
            type="checkbox"
            placeholder="enter your title here..."
            checked={headingStyles.thirdDim}
            onChange={(e) =>
              setHeadingStyles({
                ...headingStyles,
                thirdDim: e.target.checked,
              })
            }
          />
        </div>
      </FormGroup>
    </div>
  );
}
