import carArray from "./components/instance.js";

// helper clculator for international currency
const currencyConverter = function (locale, currency, number) {
  const converter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(number);

  return converter;
};

// money counter to convert to short way and added a sign
const moneyCounter = function (locale, currency, unconvert) {
  const unconvertNumLength = unconvert.toString().length;
  let divideNum = 0;
  switch (unconvertNumLength) {
    case 4:
      divideNum = 1000;
      break;
    case 5:
      divideNum = 1000;
      break;
    case 6:
      divideNum = 1000000;
      break;
    case 7:
      divideNum = 1000000;
      break;

    default:
      divideNum = 0;
  }
  const unconvertedMoney = Number.parseFloat(unconvert / divideNum).toFixed(2);
  let signAddedMoney = currencyConverter(locale, currency, unconvertedMoney);

  const divideNumLength = divideNum.toString().length;

  switch (divideNumLength) {
    case 4:
      signAddedMoney += " K";
      break;
    case 5:
      signAddedMoney += " K";
      break;
    case 6:
      signAddedMoney += " M";
      break;
    case 7:
      signAddedMoney += " M";
  }
  return signAddedMoney;
};

// event handler function for the button
const buttonStatus = function (
  button,
  statusNode,
  full_feature,
  ext_feature,
  buttonParent
) {
  let carObj = carArray.find(({ id }) => id === buttonParent.parentElement.id);
  //  toggle extraInterior boolean value
  carObj.extraInterior ? carObj.extraCharge(false) : carObj.extraCharge(true);

  // button toggle text
  carObj.extraInterior
    ? (button.innerText = "Remove Extra Feature")
    : (button.innerText = "Add Extra Feature");

  // status toggle text
  carObj.extraInterior
    ? (statusNode.innerText = "Premium Feature")
    : (statusNode.innerText = "Basis Feature");

  // added money for full feature
  const fullFeature = carObj.price + carObj.priceExtend;
  const fullFeatureWithSign = moneyCounter("en-US", "USD", fullFeature);

  if (carObj.extraInterior) {
    full_feature.innerText = fullFeatureWithSign;
    ext_feature.innerText = "Price is Extended and It is Now Premium";
    ext_feature.style.color = "green";
  } else {
    full_feature.innerText = moneyCounter("en-US", "USD", carObj.price);
    ext_feature.innerText = moneyCounter("en-US", "USD", carObj.priceExtend);
    ext_feature.style.color = "";
  }
};

const car_section = document.querySelector(".car_section");
// object output inject to the dom
const carList = carArray.map((car) => {
  const sportsCar = document.createElement("article");
  sportsCar.classList.add("super_car");
  sportsCar.setAttribute("id", car.id);

  sportsCar.innerHTML = `
    <figure class="img_container">
        <img src=${car.img} alt="New ${car.company} ${car.model}" title="New ${
    car.company
  } ${car.model}">
    </figure>
    <section class="car_content">
        <h2 class="title">${car.company} ${car.model}</h2>
        <ul class="car_items">
            <li class="item">Model : ${car.model}</li>
            <li class="item">Color : ${car.color}</li>
            <li class="item">Price : <span class="full_feature">${moneyCounter(
              "en-US",
              "USD",
              car.price
            )}</span></li>
            <li class="item">Extra Interior Charge: <span class="ext_feature">${moneyCounter(
              "en-US",
              "USD",
              car.priceExtend
            )}</span></li>
            <li class="item"><span class="status">${
              car.extraInterior ? "Premium Feature" : "Basis Feature"
            }</span></li>
            <li class="item">Car Series Age: ${
              car.carSeriesAge() >= 365
                ? Number.parseFloat(car.carSeriesAge() / 365).toFixed(1) +
                  " years"
                : car.carSeriesAge() + " days."
            }</li>
        </ul>
        <button class="button">Add Extra Interior</button>
    </section>
`;

  const button = sportsCar.querySelector(".button");
  const buttonParent = button.parentElement;
  const statusNode = sportsCar.querySelector(".item .status");
  const full_feature = sportsCar.querySelector(".item .full_feature");
  const ext_feature = sportsCar.querySelector(".item .ext_feature");

  button.addEventListener("click", (e) => {
    buttonStatus(button, statusNode, full_feature, ext_feature, buttonParent);
  });

  return sportsCar;
});

carList.forEach((car) => {
  car_section.append(car);
});
