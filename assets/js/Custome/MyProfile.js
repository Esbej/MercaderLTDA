function profile(){
  $("#nameProfile").html(sessionStorage.getItem('nombre'))
  $("#emailProfile").html(sessionStorage.getItem('email'))
  $("#idProfile").html(JSON.parse(sessionStorage.getItem('User')).identification)
  $("#profileProfile").html(JSON.parse(sessionStorage.getItem('User')).type)
  $("#zoneProfile").html(sessionStorage.getItem('zona').replace(/_/g, ' '))
}