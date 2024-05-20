"use strict";
// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка.

// const url = "https://jsonplaceholder.typicode.com/users";

// const getData2 = async (url) => {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// const fetchData = await getData2(url);
// console.log(fetchData);

// const divEl = document.querySelector("div.content");
// const contentEL = document.createElement("ul");
// fetchData.forEach((element) => {
//   //   console.log(element);
//   const liEl = document.createElement("li");
//   liEl.classList.add("name");
//   liEl.setAttribute("id", element.id);
//   liEl.innerHTML = element.name;

//   liEl.addEventListener("click", () => {
//     contentEL.removeChild(liEl);
//   });

//   contentEL.appendChild(liEl);
// });
// divEl.appendChild(contentEL);

// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const url = "https://dog.ceo/api/breeds/image/random/10";

const divEl = document.querySelector("div.content");

const getData2 = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    let i = 0;
    let dogs = setTimeout(function showDog() {
      if (i < 10) {
        divEl.insertAdjacentHTML(
          "beforeend",
          `<div class="dog_box">
            <img
          src="${data.message[i]}"
        />
                </div>`
        );
        i++;
        dogs = setTimeout(showDog, 3000);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
const fetchData = await getData2(url);
console.log(fetchData);
