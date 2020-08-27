import React from "react";
import {
  FormGroup,
  InputLabel,
  Slider,
  FormControlLabel,
  Switch,
} from "@material-ui/core";

export default function AvatarGroup({
  avatarStyles,
  setAvatarStyles,
}: {
  avatarStyles: any;
  setAvatarStyles: any;
}) {
  return (
    <div style={{ marginTop: 40 }}>
      <h2>Avatar Styles</h2>
      <FormGroup>
        <div>
          <InputLabel>Avatar Height</InputLabel>
          <Slider
            min={60}
            max={400}
            value={avatarStyles.height}
            onChange={(e, value) =>
              setAvatarStyles({
                ...avatarStyles,
                height: value as number,
              })
            }
          />
        </div>
        <div>
          <InputLabel>Avatar Width</InputLabel>
          <Slider
            min={60}
            max={400}
            value={avatarStyles.width}
            onChange={(e, value) =>
              setAvatarStyles({
                ...avatarStyles,
                width: value as number,
              })
            }
          />
        </div>
        <FormControlLabel
          control={
            <Switch
              type="checkbox"
              placeholder="enter your title here..."
              name="subheading"
              checked={avatarStyles.reverse}
              onChange={(e) =>
                setAvatarStyles({
                  ...avatarStyles,
                  reverse: e.target.checked,
                })
              }
            />
          }
          label="Avatar Flip"
        />
        <FormControlLabel
          control={
            <Switch
              type="checkbox"
              placeholder="enter your title here..."
              name="subheading"
              checked={avatarStyles.hide}
              onChange={(e) =>
                setAvatarStyles({
                  ...avatarStyles,
                  hide: e.target.checked,
                })
              }
            />
          }
          label="Hide avatar"
        />
      </FormGroup>
    </div>
  );
}
