this.addEventListener("fetch", function (event) {
  console.log(event.request);
});

/*

  new Response('<p>Hello from your friendly neighbourhood service worker!</p>', {
  headers: { 'Content-Type': 'text/html' }
})
*/
