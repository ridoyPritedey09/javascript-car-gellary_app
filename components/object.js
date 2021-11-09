// make a new car class

class Car {
  constructor(
    id,
    company,
    model,
    color,
    price,
    img,
    priceExtned,
    extraInterior,
    edition
  ) {
    this.id = id;
    this.company = company;
    this.model = model;
    this.color = color;
    this.price = price;
    this.img = img;
    this.priceExtend = priceExtned;
    this.extraInterior = extraInterior;
    this.edition = edition;
  }
  extraCharge(extra) {
    this.extraInterior = extra;
  }
  carSeriesAge() {
    const today = new Date();
    const firstEdition = new Date(this.edition);
    const timeInMili = today - firstEdition;
    const ageInDays = Math.floor(timeInMili / (1000 * 3600 * 24));
    return ageInDays;
  }
}

export default Car;
