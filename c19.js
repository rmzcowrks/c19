function closeBanner() {
  window.sessionStorage.setItem("swipe-covid-dismissed", true);
  document.querySelector(".b-covid-alert").classList.remove("m-active");
}

function isDismissed() {
  return window.sessionStorage.getItem("swipe-covid-dismissed");
}

(function () {
  if (!isDismissed()) {
    var $body = document.body;
    var $banner = document.createElement("div");
    var $styles = document.createElement("style");

    function detectMob() {
      return window.innerWidth <= 800;
    }

    var url = "https://sacoronavirus.co.za/";
    if (detectMob()) {
      url = "https://coronavirus.datafree.co/";
    }

    var stylesCSS = `.b-covid-alert{position:absolute;top:0;left:0;right:0;width:100%;display:flex;justify-items:stretch;background-color:#fc5355;transform:translateY(-100%);transition:transform ease 1s;z-index: 99999999999}.b-covid-alert.m-active{transform:translateY(0)}.b-covid-alert .e-icon{background-color:#fc6666;padding:10px;display:flex;align-items:center}.b-covid-alert .e-text{flex-grow:1;padding:10px 20px;display:flex;align-items:center}.b-covid-alert .e-text a{color:#fff;font-size:14px}.b-covid-alert .e-close{display:flex;align-items:center;padding:10px 15px;cursor:pointer}`;

    var iconSVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="28px" height="24px" viewBox="0 0 28 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 63.1 (92452) - https://sketch.com -->
    <title>warning</title>
    <desc>Created with Sketch.</desc>
    <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="warning" transform="translate(1.000000, 1.000000)" fill="#FFFFFF" fill-rule="nonzero" stroke="#FFFFFF" stroke-width="0.5">
            <path d="M11.424,1.148 L0.639,18.597 C-0.526,20.482 0.323,22 2.528,22 L23.472,22 C25.676,22 26.522,20.477 25.361,18.597 L14.576,1.148 C13.708,-0.256 12.295,-0.26 11.425,1.148 L11.424,1.148 Z M12.353,1.523 C12.7,0.962 13.265,0.964 13.611,1.523 L24.616,19.306 C25.195,20.242 24.762,21.001 23.674,21.001 L2.29,21.001 C1.191,21.001 0.766,20.247 1.348,19.306 L12.353,1.523 Z M13,7 C12.448,7 12,7.453 12,7.997 L12,14.003 C12,14.554 12.444,15 13,15 C13.552,15 14,14.547 14,14.003 L14,7.997 C14,7.446 13.556,7 13,7 L13,7 Z M13,19 C13.552,19 14,18.552 14,18 C14,17.448 13.552,17 13,17 C12.448,17 12,17.448 12,18 C12,18.552 12.448,19 13,19 L13,19 Z" id="Shape"></path>
        </g>
    </g>
</svg>`;

    var closeSVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 63.1 (92452) - https://sketch.com -->
    <title>close</title>
    <desc>Created with Sketch.</desc>
    <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="close" fill="#FFFFFF" fill-rule="nonzero">
            <polygon id="Path" points="9 7.586 1.929 0.515 0.515 1.929 7.586 9 0.515 16.071 1.929 17.485 9 10.414 16.071 17.485 17.485 16.071 10.414 9 17.485 1.929 16.071 0.515"></polygon>
        </g>
    </g>
</svg>`;

    var bannerHTMLIcon = `<div class="e-icon">${iconSVG}</div>`;

    var bannerHTMLText = `<div class="e-text"><a href="${url}" target="_blank">For more information on the COVID-19 Pandemic in South Africa, click here.${
      detectMob() ? " Data free." : ""
    }</a></div>`;

    var bannerHTMLClose = `<div class="e-close" onclick="closeBanner()">${closeSVG}</div>`;

    $banner.classList.add("b-covid-alert");
    $banner.innerHTML = bannerHTMLIcon + bannerHTMLText + bannerHTMLClose;
    $styles.innerHTML = stylesCSS;

    $body.insertBefore($styles, $body.firstChild);
    $body.insertBefore($banner, $body.firstChild);

    setTimeout(function () {
      document.querySelector(".b-covid-alert").classList.add("m-active");
    }, 2000);
  }
})();
