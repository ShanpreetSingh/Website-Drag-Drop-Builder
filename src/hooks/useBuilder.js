import { useState, useCallback } from 'react';

export default function useBuilder() {
  const [elements, setElements] = useState([]);
  const [selectedElementId, setSelectedElementId] = useState(null);

  const addElement = useCallback((type, sectionId) => {
    const defaultValues = {
      text: {
        content: 'New Text',
        styles: { color: '#000000', fontSize: '16px' }
      },
      image: {
        src: '',
        alt: '',
        styles: { width: '100%' }
      },
      button: {
        text: 'Button',
        styles: { backgroundColor: '#1976d2', color: '#ffffff' }
      }
    };

    const newElement = {
      id: `el-${Date.now()}`,
      type,
      sectionId,
      ...defaultValues[type]
    };

    setElements(prev => [...prev, newElement]);
    setSelectedElementId(newElement.id);
    return newElement;
  }, []);

  const updateElement = useCallback((id, updates) => {
    setElements(prev =>
      prev.map(el => (el.id === id ? { ...el, ...updates } : el))
    );
  }, []);

  return {
    elements,
    addElement,
    updateElement,
    selectedElement: elements.find(el => el.id === selectedElementId),
    selectElement: setSelectedElementId
  };
}