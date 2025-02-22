async function checkFileForText() {
  try {
    const response = await fetch('pixeltree.txt');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();

    const match = text.match(/text = ([\w\s]+)/);
    if (match && match[1]) {
      document.body.innerHTML += `<p>${match[1]}</p>`;
    } else {
      document.body.innerHTML += '<p>Text does not exist.</p>';
    }

  } catch (error) {
    console.error('Error:', error);
    document.body.innerHTML += '<p>An error occurred.</p>';
  }
}

checkFileForText();
