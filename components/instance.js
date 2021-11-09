// import car class from object.js
import Car from "./object.js";

// 3 car for one class

const newBugatti = new Car(
  "nb01",
  "Bugatti",
  "Chiron",
  "black",
  3000000,
  "./img/bugatti_chiron.jpg",
  18000,
  false,
  "Tue Jan 08 2019 21:29:35 GMT+0600"
);

const newFerrari = new Car(
  "nf02",
  "Ferrari",
  "Laferrari",
  "Wine Read",
  3100000,
  "./img/ferrari-laferrari.png",
  25000,
  false,
  "Fri Dec 18 2018 11:06:59 GMT+0600"
);

const newLamborghini = new Car(
  "nl03",
  "Lamborghini",
  "Aventador",
  "Royal Black",
  3936950,
  "./img/lamborghini_aventador.jpg",
  39000,
  false,
  "Sun Mar 25 2020 16:32:16 GMT+0600"
);

const carArray = [newBugatti, newFerrari, newLamborghini];

export default carArray;
