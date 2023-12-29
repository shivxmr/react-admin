import React, { useRef } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import { styled } from "@mui/system";

const CodeContainer = () => {
  const codeRef = useRef(null);
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopyClick = () => {
    if (codeRef.current) {
      codeRef.current.select();
      document.execCommand("copy");
      setIsCopied(true);
    }
  };

  const handleCloseSnackbar = () => {
    setIsCopied(false);
  };

  return (
    <div>
      <TextField
        inputRef={codeRef}
        multiline
        rows={8}
        variant="outlined"
        label="SQL Code"
        defaultValue={`CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50)
);

INSERT INTO employees (id, name, department) VALUES (1, 'John Doe', 'Sales');
INSERT INTO employees (id, name, department) VALUES (2, 'Jane Smith', 'Marketing');}`}
        fullWidth
      />
      <CopyButton variant="contained" onClick={handleCopyClick}>
        Copy Code
      </CopyButton>
      <Snackbar
        open={isCopied}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message="Code Copied!"
      />
    </div>
  );
};

const CopyButton = styled(Button)({
  marginTop: "1rem",
});

export default CodeContainer;
