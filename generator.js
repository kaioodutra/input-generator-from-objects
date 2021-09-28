const dataObejct = [
  {
    id: 1,
    value: "90,00",
  },
  {
    id: 2,
    value: "95,00",
  },
  {
    id: 3,
    value: "98,00",
  },
  {
    id: 4,
    value: "93,00",
  },
  {
    id: 5,
    value: "96,00",
  },
  {
    id: 6,
    value: "91,00",
  },
  {
    id: 7,
    value: "94,00",
  },
]

const root = document.getElementById("root")

dataObejct.map((item, key) => {
  let input = document.createElement("input")
  let label = document.createElement("label")
  input.setAttribute("id", item.id)
  input.setAttribute("value", item.value)
  input.setAttribute("key", key)
  label.innerHTML = "Valor " + item.id
  root.appendChild(label)
  root.appendChild(document.createElement("br"))
  root.appendChild(input)
  root.appendChild(document.createElement("br"))
  root.appendChild(document.createElement("br"))
})
