// обновить фотки
function reload() {
    const images = document.querySelectorAll("img");
    images.forEach((image) => {
      image.src = "https://picsum.photos/300/200?Random=" + Math.random();
    }); // для каждого меняем атрибут
  }
  const buttonN = document.querySelector(".reloadButton");
  buttonN.onclick = reload;
  // добавить фото
  function Addme() {
    const imageNew = document.createElement("img");
    imageNew.src = "https://picsum.photos/300/200?Random=" + Math.random();
    document.querySelector(".container").append(imageNew);
    removeB.disabled = false; //включить кнопку тк добавил фото
    removeB.style = ".button"; //вернул исходный стиль из ксс
  }
  const addImage = document.querySelector(".addButton");
  addImage.onclick = Addme;
  
  // удаление
  
  const removeB = document.querySelector(".removeButton");
  
  function removeI() {
    const remImg = document.querySelector("img");
    remImg.remove("img"); // удалить последнюю remImg[remImg.length -1]
    if (
      document.querySelectorAll("img")
        .length /* <выборка всех, переменная не катит*/ === 1
    ) {
      removeB.disabled = true; //отрубить кнопку
      removeB.style.background = "gray"; // и увел бэк в серый
    }
  }
  removeB.onclick = removeI;
  