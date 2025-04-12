import { Button, Box } from '@mui/material';
export default function PreviewToolbar({ onPreview, onExit }) {
  return (
    <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}>
      <Button 
        variant="contained" 
        color="primary"
        onClick={onPreview}
      >
        Preview
      </Button>
      <Button 
        sx={{ ml: 1 }} 
        onClick={onExit}
      >
        Exit
      </Button>
    </Box>
  );
}