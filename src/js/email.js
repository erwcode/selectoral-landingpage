export const emailSystem = () => {
  const $SYSTEM_FORM = document.getElementById('systemForm');

  if($SYSTEM_FORM) {

    $SYSTEM_FORM.addEventListener('submit', function (e) {
        e.preventDefault();

        var datos = new FormData(this);

        fetch('./email.php', {
            method: 'POST',
            body: datos
        })

        .then(function (response) {
            return response.text();
        }).then(function (text) {
            console.log(text);
            let url = 'https://selectoral.com/demo'
            window.open(url, '_blank')
            location.reload();
        }).catch(function (error) {
            console.error(error);
        });
    })

  }

}
