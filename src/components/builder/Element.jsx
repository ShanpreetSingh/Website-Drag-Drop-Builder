import { Box , Typography } from '@mui/material';
const Element = ({ element, isSelected, onSelect }) => {
  const renderElement = () => {
    switch (element.type) {
      case 'text':
        return (
          <Typography sx={element.styles}>
            {element.content || 'Double click to edit text'}
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
              padding: '8px 16px',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              ...element.styles
            }}
          >
            {element.text || 'Button'}
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
        border: isSelected ? '2px solid #1976d2' : '2px solid transparent',
        borderRadius: '4px',
        p: 1,
        mb: 1,
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#f5f5f5'
        }
      }}
    >
      {renderElement()}
    </Box>
  );
};

export default Element;