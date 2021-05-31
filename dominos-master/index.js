const $select = document.getElementById('sizes')
const $sizes = document.querySelector('.sizes')

$select.addEventListener('change', function () {
  $sizes.textContent = $select.value
})

const $pepperoni = document.querySelector('.pepperoni')
const $button1 = document.getElementById('pepperoni')

$button1.addEventListener('click', function () {
  $pepperoni.classList.toggle('show')
})

$button1.addEventListener('click', function () {
  $button1.classList.toggle('checked')
})

const $sausage = document.querySelector('.sausage')
const $button2 = document.getElementById('sausage')

$button2.addEventListener('click', function () {
  $sausage.classList.toggle('show')
})
$button2.addEventListener('click', function () {
  $button2.classList.toggle('checked')
})

const $button3 = document.getElementById('olives')
const $olives = document.querySelector('.olives')

$button3.addEventListener('click', function () {
  $button3.classList.toggle('checked')
})
$button3.addEventListener('click', function () {
  $olives.classList.toggle('show')
})

/********************************
 *
 * const $buttons = cosument.querySelectorAll('.button)
 *
 * for(const $button of $buttons){
 *  $button.addEventListener('click', function(e){
 *    $button.classList.toggle('checked')
 *
 *    const topping = $button.id // ex. pepperoni
 *
 *    const $topping = document.querySelector('.${topping}')
 *
 *    $topping.classList.toggle('show')
 * })
 * }
 *
 *
 *
 */
