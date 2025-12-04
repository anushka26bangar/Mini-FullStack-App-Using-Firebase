import { url } from "./metadata.js";

const nameInput = document.getElementById("name");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addBtn.onclick = function () {
  const n = nameInput.value.trim();

  fetch(`${url}.json`, {
    method: "POST",
    body: JSON.stringify({ n })
  }).then(() => {
    nameInput.value = "";
    loadData();
  });
};

function loadData() 
      for (let key in data) {
        list.innerHTML += `<li>${data[key].n}</li>`;
      }
    });
}

loadData();
