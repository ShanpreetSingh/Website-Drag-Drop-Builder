import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function Header() {
  return (
    <AppBar position="static" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight="bold">
          Websites.co.in Builder
        </Typography>
        <Button 
          variant="contained" 
          color="secondary"
          startIcon={<CloudUploadIcon />}
          sx={{ textTransform: 'none' }}
        >
          Publish Website
        </Button>
      </Toolbar>
    </AppBar>
  );
}