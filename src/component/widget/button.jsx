// CustomButton.js
import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ onClick, bgColor, textColor, height, width, children, ...props }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        height,
        width,
        backgroundColor: bgColor,
        color: textColor,
        '&:hover': {
          backgroundColor: bgColor ? `${bgColor}cc` : undefined, // Add some transparency on hover if bgColor is defined
        }
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
