document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  handleList(e.target.new_task.value)
  })
})

function handleList(list){
  let p = document.createElement('li')
  let btn = document.createElement('button')
  btn.textContent = "X"
  p.textContent=`${list}  `
document.querySelector('#list').appendChild(p).appendChild(btn)
btn.addEventListener('click',removeBtn)};

function removeBtn(e){
  e.target.parentNode.remove()}

 

