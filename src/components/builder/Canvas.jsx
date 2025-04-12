import { useDrop } from 'react-dnd';
import { Box, Typography } from '@mui/material';
import Element from './Element';
import template from '../../templates/default.json';

export default function Canvas({ elements = [], addElement, selectElement }) {
  const [{ canDrop }, drop] = useDrop(() => ({
    accept: 'ELEMENT',
    drop: (item) => addElement(item.type, 'main'),
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <Box
      ref={drop}
      sx={{
        flex: 1,
        p: 4,
        borderRadius: '12px',
        bgcolor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        border: canDrop ? '2px dashed #6366f1' : '1px solid #e2e8f0',
        transition: 'all 0.2s ease'
      }}
    >
      {template.sections.map((section) => (
        <Box key={section.id} sx={{ mb: 4 }}>
          <Typography variant="subtitle2" sx={{ 
            mb: 2,
            color: '#64748b',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            {section.name}
          </Typography>
          <Box sx={{
            minHeight: '120px',
            borderRadius: '8px',
            bgcolor: elements.length ? 'transparent' : '#f8fafc',
            border: elements.length ? 'none' : '1px dashed #cbd5e1',
            p: elements.length ? 0 : 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}>
            {elements.filter(el => el.sectionId === section.id).map((element) => (
              <Element 
                key={element.id} 
                element={element}
                onClick={() => selectElement(element.id)}
              />
            ))}
            {!elements.length && (
              <Typography variant="body2" color="text.secondary" textAlign="center">
                Drag elements here to begin building
              </Typography>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
}