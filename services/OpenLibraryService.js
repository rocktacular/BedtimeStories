const rootUrl = `http://openlibrary.org/`;

export default {
  search: async function(str, category) {
    const res = await fetch(`${rootUrl}search.json?${category}=${str}`);
    const json = await res.json();
    console.log('search results:', json);
    return json.docs;
  },
};
