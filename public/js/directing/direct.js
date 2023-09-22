document.addEventListener("DOMContentLoaded", function () {
  const getHome = document.getElementById("get_direct");

  const redirect = () => {
    window.location.href = "index.html";
  };

  getHome.addEventListener("click", redirect);
});
