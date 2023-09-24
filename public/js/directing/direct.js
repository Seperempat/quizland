const getHome = document.getElementById("get_direct_usr");

const redirect = (page) => {
  window.location.href = page;
};

getHome.addEventListener("click", () => redirect("users.html"));
