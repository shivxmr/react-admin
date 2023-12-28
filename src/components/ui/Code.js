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
        label="Code"
        defaultValue={`CREATE TABLE employees (\n
    id INT PRIMARY KEY,\n
    name VARCHAR(50),\n
    department VARCHAR(50)\n
);

INSERT INTO employees (id, name, department) VALUES (1, 'John Doe', 'Sales');\n
INSERT INTO employees (id, name, department) VALUES (2, 'Jane Smith', 'Marketing');\n}`}
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
