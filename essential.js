async function checkFileForApple() {
  try {
    const response = await fetch('pixeltree.txt');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();

    if (text.includes('apple')) {
      document.body.innerHTML += '<p>This is a test.</p>';
    }
  } catch (error) {
    console.error('Error:', error);
    document.body.innerHTML += '<p>An error occurred while checking the file.</p>';
  }
}

checkFileForApple();
