export const showCurrentDate = () => {
  const $DATE = document.getElementById('date')

  if($DATE) {
    let currentDate = $DATE
    var getDate = new Date();
    currentDate.innerHTML = getDate.getFullYear()
  }

}
