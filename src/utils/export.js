export function exportAsHTML(elements) {
    const html = elements.map(el => {
      if (el.type === 'text') return `<p>${el.content}</p>`;
      if (el.type === 'image') return `<img src="${el.src}" alt="${el.alt}">`;
      return '';
    }).join('');
    return `<!DOCTYPE html><html><body>${html}</body></html>`;
  }