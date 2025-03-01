async function checkFileForTitle() {
  try {
    const response = await fetch('vortex.txt');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.title();

    const match = title.match(/title = ([\w\s]+)/); 

    if (match && match[1]) {
      document.body.innerHTML += `<title>${match[1]}</title>`;
    } else {
      document.body.innerHTML += '<title>null</title>';
    }

  } catch (error) {
    console.error('Error:', error);
    document.body.innerHTML += '<title>An error occurred while trying to load the text. Try refreshing.</title>';
  }
}

checkFileForTitle();
