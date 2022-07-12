const $form = document.querySelector('.form');
const $butttonMailto = document.querySelector('#nomail');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault() 
    const form = new FormData(this)
    console.log(form.get('name'))
    $butttonMailto.setAttribute('href', `mailto:gomez10828@gmail.com?subject=nombre ${form.get('name')} correo ${form.get('mail')}&body=${form.get('escribe')}`)
    $butttonMailto.click()
}