export function gtag_report_conversion(url) {
  console.log("file gtag report conversion");
  var callback = function() {
    if (typeof (url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
    'send_to': 'AW-11362930413/1kPwCIHazO8YEO2doqoq',
    'event_callback': callback
  });
  return false;
}

