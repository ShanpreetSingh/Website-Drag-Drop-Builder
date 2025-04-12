import { useDrag } from 'react-dnd';
import { Box, Typography, Button } from '@mui/material';

const elementTypes = [
  { type: 'text', label: 'Text', icon: 'T' },
  { type: 'image', label: 'Image', icon: '📷' },
  { type: 'button', label: 'Button', icon: '🔘' },
];

function DraggableElement({ type, label, icon }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ELEMENT',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Button
      ref={drag}
      variant="outlined"
      sx={{
        opacity: isDragging ? 0.5 : 1,
        display: 'flex',
        flexDirection: 'column',
        height: 80,
        width: 80,
        m: 1
      }}
    >
      <Typography variant="h5">{icon}</Typography>
      <Typography variant="caption">{label}</Typography>
    </Button>
  );
}

export default function ElementsPanel() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Elements
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {elementTypes.map((item) => (
          <DraggableElement key={item.type} {...item} />
        ))}
      </Box>
    </Box>
  );
}