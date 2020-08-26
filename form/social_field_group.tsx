import React from "react";
import {
  FormGroup,
  FormControlLabel,
  Switch,
  TextField,
} from "@material-ui/core";
import { SocialTypes } from "../types/social";

export default function SocialFieldGroup({
  showSocial,
  setShowSocial,
  setSocial,
  social,
}: {
  showSocial: boolean;
  setShowSocial: any;
  social: SocialTypes;
  setSocial: any;
}) {
  return (
    <div style={{ marginTop: 40 }}>
      <h1>Social Fields</h1>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              type="checkbox"
              placeholder="enter your title here..."
              name="subheading"
              checked={showSocial}
              onChange={(e) => setShowSocial(e.target.checked)}
            />
          }
          label="Show Social"
        />
        {showSocial ? (
          <>
            <TextField
              label="LinkedIn"
              type="text"
              placeholder="enter your title here..."
              name="linkedIn"
              value={social.linkedIn}
              onChange={(e) =>
                setSocial({ ...social, linkedIn: e.target.value })
              }
            />
            <TextField
              label="mail"
              type="text"
              placeholder="enter your title here..."
              name="mail"
              value={social.mail}
              onChange={(e) => setSocial({ ...social, mail: e.target.value })}
            />
            <TextField
              label="Rss"
              type="text"
              placeholder="enter your title here..."
              name="rss"
              value={social.rss}
              onChange={(e) => setSocial({ ...social, rss: e.target.value })}
            />
            <TextField
              label="Stackoverflow"
              type="text"
              placeholder="enter your title here..."
              name="stackoverflow"
              value={social.stackoverflow}
              onChange={(e) =>
                setSocial({ ...social, stackoverflow: e.target.value })
              }
            />
            <TextField
              label="Twitter"
              type="text"
              placeholder="enter your title here..."
              name="twitter"
              value={social.twitter}
              onChange={(e) =>
                setSocial({ ...social, twitter: e.target.value })
              }
            />
            <TextField
              label="Github"
              type="text"
              placeholder="enter your title here..."
              name="github"
              value={social.github}
              onChange={(e) => setSocial({ ...social, github: e.target.value })}
            />
          </>
        ) : null}
      </FormGroup>
    </div>
  );
}
