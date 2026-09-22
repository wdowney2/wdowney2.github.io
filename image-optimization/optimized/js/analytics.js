// Pretend analytics snippet.
// Not needed to render the page, but it still blocks parsing in the starter version
// because it has no async or defer attribute.

console.log('[analytics] page view recorded at', new Date().toISOString());

// Simulate a bit of blocking work, the kind a real tracking script can add.
var start = Date.now();
while (Date.now() - start < 40) {
  // busy wait to make the blocking cost visible in the Performance panel
}
