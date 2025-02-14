const form = document.querySelector('#search');
const termInput = document.querySelector('#term');
const error = document.querySelector('#error');
const loading = document.querySelector('#loading');
const resultsContainer = document.querySelector('#searchResult');

let controller = new AbortController();

const search = async (term) => {
  // Abort the previous request
  console.log('Abort the previous request');
  controller.abort();

  // Create a new controller for the new request
  controller = new AbortController();
  const signal = controller.signal;
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srsearch=${term}`;

  const response = await fetch(url, { signal });
  const data = await response.json();
  return data.query.search;
};

const resetSearchResult = () => {
  error.innerHTML = '';
  loading.innerHTML = '';
  resultsContainer.innerHTML = '';
};

const handleSubmit = async (e) => {
  e.preventDefault();

  // reset search result
  resetSearchResult();

  // check if term is empty
  const term = termInput.value;
  if (term === '') return;

  try {
    // show the loading
    loading.innerHTML = `<img src='./img/spinner.svg' alt='loading...'>`;

    // make the search
    const results = await search(term);

    // show the search result
    resultsContainer.innerHTML = renderSearchResult(results);
  } catch (err) {
    // show the error
    error.innerHTML = `Something went wrong.`;
    console.error(err);
  } finally {
    // hide the loading
    loading.innerHTML = '';
  }
};

const renderSearchResult = (results) => {
  return results
    .map(({ title, snippet, pageid }) => {
      return `<article>
                <a href="https://en.wikipedia.org/?curid=${pageid}">
                    <h2>${title}</h2>
                </a>
                <div class="summary">${snippet}...</div>
            </article>`;
    })
    .join('');
};

form.addEventListener('submit', handleSubmit);