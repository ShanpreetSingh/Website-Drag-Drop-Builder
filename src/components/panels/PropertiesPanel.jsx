import { Box, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from 'yup';
import useBuilder from '../../hooks/useBuilder';

const textSchema = Yup.object().shape({
  content: Yup.string().required('Text is required'),
  styles: Yup.object().shape({
    color: Yup.string().required('Color is required'),
    fontSize: Yup.string(),
  }),
});

const imageSchema = Yup.object().shape({
  src: Yup.string().url('Invalid URL').required('Image URL is required'),
  alt: Yup.string(),
  styles: Yup.object().shape({
    width: Yup.string(),
  }),
});

const buttonSchema = Yup.object().shape({
  text: Yup.string().required('Button text is required'),
  styles: Yup.object().shape({
    backgroundColor: Yup.string(),
    color: Yup.string(),
  }),
});

const PropertiesPanel = () => {
  const { selectedElement, updateElement } = useBuilder();

  if (!selectedElement) {
    return (
      <Box sx={{
        backgroundColor: '#f5f5f5',
        p: 2,
        borderLeft: '1px solid #ddd',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography>Select an element to edit</Typography>
      </Box>
    );
  }

  const getInitialValues = () => {
    switch (selectedElement.type) {
      case 'text':
        return {
          content: selectedElement.content || '',
          styles: {
            color: selectedElement.styles?.color || '#000000',
            fontSize: selectedElement.styles?.fontSize || '16px',
          },
        };
      case 'image':
        return {
          src: selectedElement.src || '',
          alt: selectedElement.alt || '',
          styles: {
            width: selectedElement.styles?.width || '100%',
          },
        };
      case 'button':
        return {
          text: selectedElement.text || '',
          styles: {
            backgroundColor: selectedElement.styles?.backgroundColor || '#1976d2',
            color: selectedElement.styles?.color || '#ffffff',
          },
        };
      default:
        return {};
    }
  };

  const getValidationSchema = () => {
    switch (selectedElement.type) {
      case 'text': return textSchema;
      case 'image': return imageSchema;
      case 'button': return buttonSchema;
      default: return Yup.object();
    }
  };

  return (
    <Box sx={{
      backgroundColor: '#f5f5f5',
      p: 2,
      borderLeft: '1px solid #ddd',
      overflowY: 'auto'
    }}>
      <Typography variant="h6" gutterBottom>
        {selectedElement.type.charAt(0).toUpperCase() + selectedElement.type.slice(1)} Properties
      </Typography>
      
      <Formik
        initialValues={getInitialValues()}
        validationSchema={getValidationSchema()}
        onSubmit={(values) => {
          updateElement(selectedElement.id, values);
        }}
      >
        {({ submitForm }) => (
          <Form>
            {selectedElement.type === 'text' && (
              <>
                <Field
                  component={TextField}
                  name="content"
                  label="Text Content"
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                  onBlur={submitForm}
                />
                <Field
                  component={TextField}
                  name="styles.color"
                  label="Text Color"
                  type="color"
                  fullWidth
                  margin="normal"
                  onBlur={submitForm}
                />
                <Field
                  component={TextField}
                  name="styles.fontSize"
                  label="Font Size (e.g., 16px)"
                  fullWidth
                  margin="normal"
                  onBlur={submitForm}
                />
              </>
            )}

            {selectedElement.type === 'image' && (
              <>
                <Field
                  component={TextField}
                  name="src"
                  label="Image URL"
                  fullWidth
                  margin="normal"
                  onBlur={submitForm}
                />
                <Field
                  component={TextField}
                  name="alt"
                  label="Alt Text"
                  fullWidth
                  margin="normal"
                  onBlur={submitForm}
                />
                <Field
                  component={TextField}
                  name="styles.width"
                  label="Width (e.g., 100% or 200px)"
                  fullWidth
                  margin="normal"
                  onBlur={submitForm}
                />
              </>
            )}

            {selectedElement.type === 'button' && (
              <>
                <Field
                  component={TextField}
                  name="text"
                  label="Button Text"
                  fullWidth
                  margin="normal"
                  onBlur={submitForm}
                />
                <Field
                  component={TextField}
                  name="styles.backgroundColor"
                  label="Background Color"
                  type="color"
                  fullWidth
                  margin="normal"
                  onBlur={submitForm}
                />
                <Field
                  component={TextField}
                  name="styles.color"
                  label="Text Color"
                  type="color"
                  fullWidth
                  margin="normal"
                  onBlur={submitForm}
                />
              </>
            )}
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PropertiesPanel;