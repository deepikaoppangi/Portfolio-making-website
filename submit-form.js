// get the form element
const form = document.getElementById('detailsform');

// add an event listener to the form's submit event
form.addEventListener('submit', (event) => {
  // prevent the form from submitting and refreshing the page
  event.preventDefault();

  // get the entered details from the form
  
  const introduction = form.querySelector('#introduction').value;
  const education1 = form.querySelector('#education1').value;
  const education2 = form.querySelector('#education2').value;
  const about = form.querySelector('#about').value;
  const email = form.querySelector('#email').value;
  const phone = form.querySelector('#phone').value;
  // const message = form.querySelector('#message').value;
  // const subscribe = form.querySelector('#subscribe').checked;
  const project1_name = form.querySelector('#project1_name').value;
  const project2_name = form.querySelector('#project2_name').value;
  const project3_name = form.querySelector('#project3_name').value;
  const project1_url = form.querySelector('#project1_url').value;
  const project2_url = form.querySelector('#project2_url').value;
  const project3_url = form.querySelector('#project3_url').value;

  // create a new HTML document from the copied HTML file
  const newDoc = document.implementation.createHTMLDocument();

  // fetch the HTML and CSS files
  Promise.all([
    fetch('templete 1.html').then(response => response.text()),
    fetch('templete 1.css').then(response => response.text())
  ])
  .then(([html, css]) => {
    // set the HTML and CSS content of the new document
    newDoc.documentElement.innerHTML = html;
    const csslink= newDoc.querySelector('#css');
    csslink.href= 'template.css';

    newDoc.getElementById('enter-details').remove()
    // get the placeholder elements by their CSS selectors
    const introductionPlaceholder = newDoc.querySelector('#introduction');
    const project1Placeholder = newDoc.querySelector('#project1');
    const project2Placeholder = newDoc.querySelector('#project2');
    const project3Placeholder = newDoc.querySelector('#project3');
    const education1Placeholder = newDoc.querySelector('#education1');
    const education2Placeholder = newDoc.querySelector('#education2');
    const aboutPlaceholder = newDoc.querySelector('#about');
    
    const phonePlaceholder = newDoc.querySelector('#phone');
    // const messagePlaceholder = newDoc.querySelector('.message-placeholder');
    const emailPlaceholder = newDoc.querySelector('#email');
    // const subscribePlaceholder = newDoc.querySelector('.subscribe-placeholder');

    // replace the placeholder content with the entered details
    introductionPlaceholder.textContent = introduction;
    project1Placeholder.textContent = project1_name;
    project2Placeholder.textContent = project2_name;
    project3Placeholder.textContent = project3_name;
    project1Placeholder.href = project1_url;
    project2Placeholder.href = project2_url;
    project3Placeholder.href = project3_url;
    education1Placeholder.textContent = education1;
    education2Placeholder.textContent = education2;
    aboutPlaceholder.textContent = about;
    // messagePlaceholder.textContent = message;
    emailPlaceholder.textContent = email;
    phonePlaceholder.textContent = phone;
    // subscribePlaceholder.textContent = subscribe ? 'Yes' : 'No';

    // create a new window to display the modified HTML
    // const newWin = window.open('', '_blank');

    // write the modified HTML to the new window
    // newWin.document.open();
    // newWin.document.write(newDoc.documentElement.outerHTML);
    // newWin.document.close();

    // create a new blob object containing the modified HTML content
    const blob = new Blob([newDoc.documentElement.outerHTML], { type: 'text/html' });

    // create URLs for the blob and CSS file
    const url = URL.createObjectURL(blob);
    const cssUrl = URL.createObjectURL(new Blob([css], { type: 'text/css' }));

    // create a download link for the HTML file
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'template.html';
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);

    // create a download link for the CSS file
    const cssDownloadLink = document.createElement('a');
    cssDownloadLink.href = cssUrl;
    cssDownloadLink.download = 'template.css';
    cssDownloadLink.style.display = 'none';
    document.body.appendChild(cssDownloadLink);

    // simulate a click on the download links to initiate the download
    downloadLink.click();
    cssDownloadLink.click();

    // cleanup by revoking the URL objects
    URL.revokeObjectURL(url);
    URL.revokeObjectURL(cssUrl);
  });
});
