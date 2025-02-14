const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', () => {
  const url = 'data.txt';
  downloadFile(url);
});

const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

async function downloadFile(url) {
  downloadBtn.disabled = true;
  progressBar.value = 0;
  progressText.textContent = '0%';

  try {
    // fetch the file
    const response = await fetch(url);

    // check if the response is ok
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    // get the total size of the file
    const contentLength = response.headers.get('content-length');

    // set the max value of the progress bar
    const totalSize = contentLength ? parseInt(contentLength, 10) : 0;

    // create the stream
    const reader = response.body.getReader();

    const stream = new ReadableStream({
      // start the stream
      async start(controller) {
        let loaded = 0;
        while (true) {
          // read the next chuck of data
          const { done, value } = await reader.read();
          //  simulate  network delay
          await delay(200);

          if (done) break;

          // calcualte the progress %
          loaded += value.length;
          const progress = totalSize ? (loaded / totalSize) * 100 : 0;

          // update the progressbar
          progressBar.value = progress;
          progressText.textContent = `${progress.toFixed(2)}%`;

          // send the data to the controller
          controller.enqueue(value);
        }
        // close the stream
        controller.close();
      },
    });

    // create the download link
    createDownloadLink(url, stream);

    // Update the progress text
    progressText.textContent = 'Download Complete!';
  } catch (error) {
    // update the progress text
    progressText.textContent = 'Download Failed!';
  } finally {
    // enable the download button
    downloadBtn.disabled = false;
  }
}

const createDownloadLink = async (url, stream) => {
  // Create a new blob URL
  const responseStream = new Response(stream);
  const blob = await responseStream.blob();
  // Create a link element, set the download attribute and trigger a download
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = url.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};