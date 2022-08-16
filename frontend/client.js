const lidersList = document.getElementById("lidersList")

const nameInput = document.getElementById("name")
const ageInput = document.getElementById("age")
const jobInput = document.getElementById("job")
const addBtn = document.getElementById("addBtn")

axios.get("http://localhost:8080/liders")
  .then(res => {
    lidersList.innerHTML = ""

    for (lider of res.data.lider) {
      lidersList.innerHTML +=
        `
      <tr>
          <td data-label="Name">${lider.name}</td>
          <td data-label="Age">${lider.age}</td>
          <td data-label="Job">${lider.job}</td>
          <td data-label="Actions">
            <button class="ui icon button">
              <i class="trash icon"></i>
            </button>
          </td>
      </tr>
      `
    }
  })
  .catch(err => console.log(err))

addBtn.onclick = (e) => {
  e.preventDefault()

  const body = {
    name: nameInput.value,
    age: ageInput.value,
    job: jobInput.value
  }

  axios.post("http://localhost:8080/liders", body)
    .then(res => {
      nameInput.value = ""
      ageInput.value = ""
      jobInput.value = ""

      console.log("Response:", res);
    })
    .catch(err => console.log(err))
}