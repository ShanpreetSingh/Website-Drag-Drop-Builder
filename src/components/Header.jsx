import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import { Box } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', borderBottom: '1px solid #e2e8f0' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ 
          fontWeight: 700,
          background: 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Websites.co.in Builder
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            variant="contained" 
            startIcon={<PublishIcon />}
            sx={{
              bgcolor: '#4f46e5',
              '&:hover': { bgcolor: '#4338ca' }
            }}
          >
            Publish
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}