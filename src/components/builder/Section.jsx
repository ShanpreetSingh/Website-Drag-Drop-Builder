import { Box } from '@mui/material';
import Element from './Element';

export default function Section({ section, elements, onSelect }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ 
        borderBottom: '1px solid',
        borderColor: 'divider',
        mb: 2,
        pb: 1
      }}>
        {section.name}
      </Box>
      {elements.map((element) => (
        <Element
          key={element.id}
          element={element}
          isSelected={false}
          onSelect={() => onSelect(element.id)}
        />
      ))}
    </Box>
  );
}