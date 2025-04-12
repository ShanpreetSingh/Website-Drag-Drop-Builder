import { Box, Typography } from '@mui/material';

export default function Element({ element, onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        p: 2,
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        bgcolor: 'white',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        '&:hover': {
          borderColor: '#6366f1',
          boxShadow: '0 1px 3px rgba(99, 102, 241, 0.2)'
        }
      }}
    >
      {element.type === 'text' && (
        <Typography sx={{ ...element.styles }}>
          {element.content || 'Double click to edit text'}
        </Typography>
      )}
      {element.type === 'image' && (
        <Box
          component="img"
          src={element.src || 'https://via.placeholder.com/150'}
          alt={element.alt}
          sx={{
            maxWidth: '100%',
            borderRadius: '4px',
            ...element.styles
          }}
        />
      )}
      {element.type === 'button' && (
        <Box
          component="button"
          sx={{
            px: 2,
            py: 1,
            borderRadius: '6px',
            bgcolor: '#4f46e5',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            ...element.styles
          }}
        >
          {element.text || 'Button'}
        </Box>
      )}
    </Box>
  );
}