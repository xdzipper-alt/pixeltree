async function checkFileForText() {
  try {
    const response = await fetch('pixeltree.pxtr');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();

    if (text.includes('text')) {
      document.body.innerHTML += '<p>This is a test for PixelTree.</p>';
    }
  } catch (error) {
    console.error('Error:', error);
    document.body.innerHTML += '<p>An error occurred while checking the file.</p>';
  }
}

checkFileForText();
