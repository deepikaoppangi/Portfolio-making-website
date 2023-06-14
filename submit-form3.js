// get the form element
const form = document.getElementById('detailsform3');

// add an event listener to the form's submit event
form.addEventListener('submit', (event) => {
  // prevent the form from submitting and refreshing the page
  event.preventDefault();

  // get the entered details from the form
  
  const introduction = form.querySelector('#introduction3').value;
  const education1 = form.querySelector('#about3').value;
  const education2 = form.querySelector('#services3').value;
  const phone3 = form.querySelector('#phone3').value;
  const email = form.querySelector('#email3').value;
  // const message = form.querySelector('#message').value;
  // const subscribe = form.querySelector('#subscribe').checked;
  const project1_name = form.querySelector('#des1').value;
  const project2_name = form.querySelector('#des2').value;
  const project3_name = form.querySelector('#des3').value;
  const project1_url = form.querySelector('#des1_url').value;
  const project2_url = form.querySelector('#des2_url').value;
  const project3_url = form.querySelector('#des3_url').value;

  // create a new HTML document from the copied HTML file
  const newDoc = document.implementation.createHTMLDocument();

  // fetch the HTML and CSS files
  Promise.all([
    fetch('template 3.html').then(response => response.text()),
    fetch('template 3.css').then(response => response.text())
  ])
  .then(([html, css]) => {
    // set the HTML and CSS content of the new document
    newDoc.documentElement.innerHTML = html;
    const csslink= newDoc.querySelector('#css1');
    csslink.href= 'template1.css';

    newDoc.getElementById('enter-details').remove()
    // get the placeholder elements by their CSS selectors
    const introductionPlaceholder = newDoc.querySelector('#introduction3');
    const project1Placeholder = newDoc.querySelector('#work-sample-1');
    const project2Placeholder = newDoc.querySelector('#work-sample-2');
    const project3Placeholder = newDoc.querySelector('#work-sample-3');
    const education1Placeholder = newDoc.querySelector('#about3');
    const education2Placeholder = newDoc.querySelector('#services3');
    const phone3Placeholder = newDoc.querySelector('#phone3');
    
    // const messagePlaceholder = newDoc.querySelector('.message-placeholder');
    const emailPlaceholder = newDoc.querySelector('#email3');
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
    phone3Placeholder.textContent = phone3;
    // messagePlaceholder.textContent = message;
    emailPlaceholder.textContent = email;
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
    downloadLink.download = 'template1.html';
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);

    // create a download link for the CSS file
    const cssDownloadLink = document.createElement('a');
    cssDownloadLink.href = cssUrl;
    cssDownloadLink.download = 'template1.css';
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
