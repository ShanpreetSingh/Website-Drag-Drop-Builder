import { Box, Typography } from '@mui/material';
import Element from './Element';
import useBuilder from '../../hooks/useBuilder';

const Section = ({ section, elements }) => {
  const { selectedElementId, selectElement } = useBuilder();

  return (
    <Box
      sx={{
        border: '1px dashed #ccc',
        borderRadius: 1,
        p: 2,
        mb: 2,
        minHeight: '100px'
      }}
    >
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {section.name}
      </Typography>
      {elements.map((element) => (
        <Element
          key={element.id}
          element={element}
          isSelected={element.id === selectedElementId}
          onSelect={() => selectElement(element.id)}
        />
      ))}
    </Box>
  );
};

export default Section;