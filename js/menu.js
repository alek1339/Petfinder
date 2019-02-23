$('#showMenu').click(function () {
  $('#home').animate({ 'width': 'toggle' }, 500)
})

$('#hideMenu').click(function () {
  $('#home').animate({ 'width': 'toggle' }, 500)
})

function hideMenu () {
  $('#home').animate({ 'width': 'toggle' }, 500)
}

function aboutUsClicked () {
  let bckgImg = document.getElementById('bckgImg')

  let aboutUsFirstHalf = document.getElementsByClassName('aboutUsFirstHalf')[0]
  let aboutUsSecondHalf = document.getElementsByClassName('aboutUsSecondHalf')[0]

  let supportUsFirstHalf = document.getElementsByClassName('supportUsFirstHalf')[0]
  let supportUsSecondHalf = document.getElementsByClassName('supportUsSecondHalf')[0]
  let adoptFirstHalf = document.getElementsByClassName('adoptFirstHalf')[0]
  let adoptSecondHalf = document.getElementsByClassName('adoptSecondHalf')[0]
  let adoptAnimalsFirstHalf = document.getElementsByClassName('adoptAnimalsFirstHalf')[0]
  let adoptAnimalsSecondHalf = document.getElementsByClassName('adoptAnimalsSecondHalf')[0]
  let contactsFirstHalf = document.getElementsByClassName('contactsFirstHalf')[0]
  let contactsSecondHalf = document.getElementsByClassName('contactsSecondHalf')[0]
  let map = document.getElementsByTagName('iframe')[0]

  aboutUsSecondHalf.style.display = 'block'
  aboutUsFirstHalf.style.display = 'block'

  adoptFirstHalf.style.display = 'none'
  adoptSecondHalf.style.display = 'none'
  supportUsFirstHalf.style.display = 'none'
  supportUsSecondHalf.style.display = 'none'
  adoptAnimalsFirstHalf.style.display = 'none'
  adoptAnimalsSecondHalf.style.display = 'none'
  contactsFirstHalf.style.display = 'none'
  contactsSecondHalf.style.display = 'none'
  bckgImg.style.backgroundImage = 'url(./images/slide-1.jpg)'
  map.style.visibility = 'hidden'
}

function supportUsClicked () {
  let aboutUsFirstHalf = document.getElementsByClassName('aboutUsFirstHalf')[0]
  let aboutUsSecondHalf = document.getElementsByClassName('aboutUsSecondHalf')[0]

  let bckgImg = document.getElementById('bckgImg')
  let supportUsFirstHalf = document.getElementsByClassName('supportUsFirstHalf')[0]
  let dayCareSecondtHalf = document.getElementsByClassName('supportUsSecondHalf')[0]
  let adoptFirstHalf = document.getElementsByClassName('adoptFirstHalf')[0]
  let adoptSecondHalf = document.getElementsByClassName('adoptSecondHalf')[0]
  let adoptAnimalsFirstHalf = document.getElementsByClassName('adoptAnimalsFirstHalf')[0]
  let adoptAnimalsSecondHalf = document.getElementsByClassName('adoptAnimalsSecondHalf')[0]
  let contactsFirstHalf = document.getElementsByClassName('contactsFirstHalf')[0]
  let contactsSecondHalf = document.getElementsByClassName('contactsSecondHalf')[0]
  let map = document.getElementsByTagName('iframe')[0]

  aboutUsSecondHalf.style.display = 'none'
  aboutUsFirstHalf.style.display = 'none'
  adoptFirstHalf.style.display = 'none'
  adoptSecondHalf.style.display = 'none'
  adoptAnimalsFirstHalf.style.display = 'none'
  adoptAnimalsSecondHalf.style.display = 'none'
  contactsFirstHalf.style.display = 'none'
  contactsSecondHalf.style.display = 'none'

  supportUsFirstHalf.style.display = 'block'
  dayCareSecondtHalf.style.display = 'block'
  bckgImg.style.backgroundImage = 'url(./images/slider_img2.jpg)'
  map.style.visibility = 'hidden'
}

function adoptedAnimalsClicked () {
  let aboutUsFirstHalf = document.getElementsByClassName('aboutUsFirstHalf')[0]
  let aboutUsSecondHalf = document.getElementsByClassName('aboutUsSecondHalf')[0]
  let bckgImg = document.getElementById('bckgImg')
  let supportUsFirstHalf = document.getElementsByClassName('supportUsFirstHalf')[0]
  let dayCareSecondtHalf = document.getElementsByClassName('supportUsSecondHalf')[0]
  let adoptFirstHalf = document.getElementsByClassName('adoptFirstHalf')[0]
  let adoptSecondHalf = document.getElementsByClassName('adoptSecondHalf')[0]
  let adoptAnimalsFirstHalf = document.getElementsByClassName('adoptAnimalsFirstHalf')[0]
  let adoptAnimalsSecondHalf = document.getElementsByClassName('adoptAnimalsSecondHalf')[0]
  let contactsFirstHalf = document.getElementsByClassName('contactsFirstHalf')[0]
  let contactsSecondHalf = document.getElementsByClassName('contactsSecondHalf')[0]
  let map = document.getElementsByTagName('iframe')[0]

  aboutUsSecondHalf.style.display = 'none'
  aboutUsFirstHalf.style.display = 'none'
  supportUsFirstHalf.style.display = 'none'
  dayCareSecondtHalf.style.display = 'none'
  adoptAnimalsFirstHalf.style.display = 'none'
  adoptAnimalsSecondHalf.style.display = 'none'
  contactsFirstHalf.style.display = 'none'
  contactsSecondHalf.style.display = 'none'

  adoptFirstHalf.style.display = 'block'
  adoptSecondHalf.style.display = 'block'
  bckgImg.style.backgroundImage = 'url(./images/care/3.jpg)'
  map.style.visibility = 'hidden'
}

function forAdoptionClicked () {
  let aboutUsFirstHalf = document.getElementsByClassName('aboutUsFirstHalf')[0]
  let aboutUsSecondHalf = document.getElementsByClassName('aboutUsSecondHalf')[0]
  let bckgImg = document.getElementById('bckgImg')
  let supportUsFirstHalf = document.getElementsByClassName('supportUsFirstHalf')[0]
  let dayCareSecondtHalf = document.getElementsByClassName('supportUsSecondHalf')[0]
  let adoptFirstHalf = document.getElementsByClassName('adoptFirstHalf')[0]
  let adoptSecondHalf = document.getElementsByClassName('adoptSecondHalf')[0]
  let adoptAnimalsFirstHalf = document.getElementsByClassName('adoptAnimalsFirstHalf')[0]
  let adoptAnimalsSecondHalf = document.getElementsByClassName('adoptAnimalsSecondHalf')[0]
  let contactsFirstHalf = document.getElementsByClassName('contactsFirstHalf')[0]
  let contactsSecondHalf = document.getElementsByClassName('contactsSecondHalf')[0]
  let map = document.getElementsByTagName('iframe')[0]

  aboutUsSecondHalf.style.display = 'none'
  aboutUsFirstHalf.style.display = 'none'
  supportUsFirstHalf.style.display = 'none'
  dayCareSecondtHalf.style.display = 'none'
  adoptFirstHalf.style.display = 'none'
  adoptSecondHalf.style.display = 'none'
  contactsFirstHalf.style.display = 'none'
  contactsSecondHalf.style.display = 'none'

  adoptAnimalsFirstHalf.style.display = 'block'
  adoptAnimalsSecondHalf.style.display = 'block'
  bckgImg.style.backgroundImage = 'url(./images/galeries/51174862_1026629644199484_998794679044538368_n.jpg)'
  map.style.visibility = 'hidden'
}

function contactsClicked () {
  let aboutUsFirstHalf = document.getElementsByClassName('aboutUsFirstHalf')[0]
  let aboutUsSecondHalf = document.getElementsByClassName('aboutUsSecondHalf')[0]
  let supportUsFirstHalf = document.getElementsByClassName('supportUsFirstHalf')[0]
  let dayCareSecondtHalf = document.getElementsByClassName('supportUsSecondHalf')[0]
  let adoptFirstHalf = document.getElementsByClassName('adoptFirstHalf')[0]
  let adoptSecondHalf = document.getElementsByClassName('adoptSecondHalf')[0]
  let adoptAnimalsFirstHalf = document.getElementsByClassName('adoptAnimalsFirstHalf')[0]
  let adoptAnimalsSecondHalf = document.getElementsByClassName('adoptAnimalsSecondHalf')[0]
  let contactsFirstHalf = document.getElementsByClassName('contactsFirstHalf')[0]
  let contactsSecondHalf = document.getElementsByClassName('contactsSecondHalf')[0]
  let map = document.getElementsByTagName('iframe')[0]

  aboutUsSecondHalf.style.display = 'none'
  aboutUsFirstHalf.style.display = 'none'
  supportUsFirstHalf.style.display = 'none'
  dayCareSecondtHalf.style.display = 'none'
  adoptFirstHalf.style.display = 'none'
  adoptSecondHalf.style.display = 'none'
  adoptAnimalsFirstHalf.style.display = 'none'
  adoptAnimalsSecondHalf.style.display = 'none'

  contactsFirstHalf.style.display = 'block'
  contactsSecondHalf.style.display = 'block'

  map.style.visibility = 'visible'
}
