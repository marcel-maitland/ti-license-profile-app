(function () {
  var mount = document.getElementById("ti-license-app");
  if (!mount) return;

  var learnerId = "";
  try {
    learnerId = window.CONF?.preload?.currentUser?.currentUser?.id || "";
  } catch (e) {}

  var iframe = document.createElement("iframe");
  iframe.src =
    "https://ti-license-profile-app.netlify.app/?learnerId=" +
    encodeURIComponent(learnerId);
  iframe.width = "100%";
  iframe.height = "520";
  iframe.style.border = "0";
  iframe.setAttribute("title", "License Information");

  mount.innerHTML = "";
  mount.appendChild(iframe);
})();
