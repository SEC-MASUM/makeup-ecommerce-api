const loadData = () => {
  fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
    .then((response) => response.json())
    .then((document.getElementById("spinner").style.visibility = "visible"))
    .then((data) => displayData(data));
};

loadData();

const displayData = (data) => {
  console.log(data);
  const spinner = (document.getElementById("spinner").style.visibility =
    "hidden");
};
