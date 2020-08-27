import React from "react";
import {
  FormGroup,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";

export default function BackgroundGroup({
  background,
  setBackground,
}: {
  background: any;
  setBackground: any;
}) {
  return (
    <div style={{ marginTop: 40 }}>
      <h2>Background Styles</h2>
      <FormGroup>
        <ColorPicker
          name="color"
          value={background.color}
          inputProps={{ value: background.color }}
          floatingLabelText="Background color"
          onChange={(color) => setBackground({ ...background, color })}
        />
        <TextField
          label="Background Image"
          type="text"
          placeholder="Paste your image URL"
          value={background.image}
          onChange={(e) =>
            setBackground({
              ...background,
              image: e.target.value,
            })
          }
        />
        <InputLabel>Background Size</InputLabel>
        <Select
          value={background.size}
          onChange={(e) =>
            setBackground({ ...background, size: e.target.value as string })
          }
        >
          <MenuItem value="auto">Auto</MenuItem>
          <MenuItem value="contain">Contain</MenuItem>
          <MenuItem value="cover">Cover</MenuItem>
        </Select>
        <InputLabel>Background Repeat</InputLabel>
        <Select
          value={background.repeat}
          onChange={(e) =>
            setBackground({ ...background, repeat: e.target.value as string })
          }
        >
          <MenuItem value="repeat">Repeat</MenuItem>
          <MenuItem value="no-repeat">No Repeat</MenuItem>
          <MenuItem value="repeat-x">Repeat X</MenuItem>
          <MenuItem value="repeat-y">Repeat Y</MenuItem>
        </Select>
        <InputLabel>Background Position</InputLabel>
        <Select
          value={background.position}
          onChange={(e) =>
            setBackground({
              ...background,
              position: e.target.value as string,
            })
          }
        >
          <MenuItem value="left top">Left Top</MenuItem>
          <MenuItem value="left center">Left Center</MenuItem>
          <MenuItem value="left bottom">Left Bottom</MenuItem>
          <MenuItem value="right top">Right Top</MenuItem>
          <MenuItem value="right center">Right Center</MenuItem>
          <MenuItem value="right bottom">Right Bottom</MenuItem>
          <MenuItem value="center top">Center Top</MenuItem>
          <MenuItem value="center center">Center Center</MenuItem>
          <MenuItem value="center bottom">Center Bottom</MenuItem>
        </Select>
      </FormGroup>
    </div>
  );
}
