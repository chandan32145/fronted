import React, { useEffect, useRef, useState } from "react";
import { IconButton } from "@mui/material";
import { SentimentSatisfiedAlt } from "@mui/icons-material";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const EmojiPickerToggle = ({ onSelect }) => {
  const [show, setShow] = useState(false);
  const ref = useRef();

  const togglePicker = () => setShow((prev) => !prev);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ position: "relative" }} ref={ref}>
      <IconButton
        sx={{ color: "gray", marginRight: "0.5rem" }}
        onClick={togglePicker}
      >
        <SentimentSatisfiedAlt />
      </IconButton>

      {show && (
        <div
          style={{
            position: "absolute",
            bottom: "3.5rem",
            right: 0,
            zIndex: 100,
          }}
        >
          <Picker data={data} onEmojiSelect={onSelect} theme="light" />
        </div>
      )}
    </div>
  );
};

export default EmojiPickerToggle;
