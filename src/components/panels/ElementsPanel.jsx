import { useDrag } from 'react-dnd';
import { Box, Paper, Typography } from '@mui/material';
import {
  TextFields as TextIcon,
  Image as ImageIcon,
  SmartButton as ButtonIcon
} from '@mui/icons-material';

const elements = [
  { type: 'text', label: 'Text Block', icon: <TextIcon />, color: '#6366f1' },
  { type: 'image', label: 'Image', icon: <ImageIcon />, color: '#10b981' },
  { type: 'button', label: 'Button', icon: <ButtonIcon />, color: '#ef4444' }
];

const DraggableElement = ({ type, label, icon, color }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ELEMENT',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Box
      ref={drag}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 1.5,
        borderRadius: '8px',
        bgcolor: isDragging ? '#f1f5f9' : 'white',
        border: `1px solid ${isDragging ? color : '#e2e8f0'}`,
        cursor: 'grab',
        opacity: isDragging ? 0.8 : 1,
        transition: 'all 0.2s ease',
        '&:hover': {
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          transform: 'translateY(-1px)'
        }
      }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        borderRadius: '6px',
        bgcolor: `${color}20`,
        color: color
      }}>
        {icon}
      </Box>
      <Typography variant="body2" fontWeight={500}>
        {label}
      </Typography>
    </Box>
  );
};

export default function ElementsPanel() {
  return (
    <Paper elevation={0} sx={{ 
      width: 280, 
      p: 2,
      borderRadius: '12px',
      border: '1px solid #e2e8f0'
    }}>
      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2, pl: 1 }}>
        Design Elements
      </Typography>
      <Box sx={{ display: 'grid', gap: 1 }}>
        {elements.map((item) => (
          <DraggableElement key={item.type} {...item} />
        ))}
      </Box>
    </Paper>
  );
}