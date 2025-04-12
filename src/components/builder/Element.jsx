import { Box, Typography } from '@mui/material';

export default function Element({ element, isSelected, onSelect }) {
  const renderElement = () => {
    switch (element.type) {
      case 'text':
        return (
          <Typography sx={element.styles}>
            {element.content}
          </Typography>
        );
      case 'image':
        return (
          <Box
            component="img"
            src={element.src || 'https://via.placeholder.com/150'}
            alt={element.alt}
            sx={{
              maxWidth: '100%',
              ...element.styles
            }}
          />
        );
      case 'button':
        return (
          <Box
            component="button"
            sx={{
              px: 2,
              py: 1,
              borderRadius: 1,
              ...element.styles
            }}
          >
            {element.text}
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      onClick={onSelect}
      sx={{
        border: isSelected ? '2px solid primary.main' : '2px solid transparent',
        p: 1,
        mb: 1,
        cursor: 'pointer'
      }}
    >
      {renderElement()}
    </Box>
  );
}