// after 5s do something
setTimeout(function() {
  document.querySelector('div.loading').classList.add('hidden')
}, 5000)

// this is the data for holding which page we are on
let pageNumber = -1

// objects hold the content for each page
const pages = [
  {
    circle: '#FD8B2B',
    copy1: 'The Sun',
    copy2: '—',
    copy3: '—',
    wordcolor: '#FD8B2B',
    width: '1105.54px',
    height: '1105.54px',
    position: 'translate(-900px, -300px)'
  },
  {
    circle: '#969495',
    copy1: 'Mercury',
    copy2: '57,909,227 km',
    copy3: '88 days',
    wordcolor: '#969495',
    width: '14.37px',
    height: '14.37px',
    position: 'translate(358px, 234px)'
  },
  {
    circle: '#DED4B8',
    copy1: ` <td class="colour-change">Venus</td> `,
    copy2: ` <td>108,209,475 km</td> `,
    copy3: ` <td>225 days</td> `,
    wordcolor: '#DED4B8',
    width: '21.4px',
    height: '21.4px',
    position: 'translate(418px, 231px)'
  },
  {
    circle: '#6E75A0',
    copy1: ` <td class="colour-change">Earth</td> `,
    copy2: ` <td>149,598,262 km</td> `,
    copy3: ` <td>365.24 days</td> `,
    wordcolor: '#6E75A0',
    width: '27.15px',
    height: '27.15px',
    position: 'translate(486px, 228px)'
  },
  {
    circle: '#D36540',
    copy1: ` <td class="colour-change">Mars</td> `,
    copy2: ` <td>227,943,824 km</td> `,
    copy3: ` <td>1.9 years</td> `,
    wordcolor: '#D36540',
    width: '16.93px',
    height: '16.93px',
    position: 'translate(559px, 233px)'
  },
  {
    circle: '#E8B28E',
    copy1: ` <td class="colour-change">Jupiter</td> `,
    copy2: ` <td>778,340,821 km</td> `,
    copy3: ` <td>11.9 years</td> `,
    wordcolor: '#E8B28E',
    width: '174.09px',
    height: '174.09px',
    position: 'translate(623px, 155px)'
  },
  {
    circle: '#D1AA7A',
    copy1: ` <td class="colour-change">Saturn</td> `,
    copy2: ` <td>1,426,666,422 km</td> `,
    copy3: ` <td>29.5 years</td> `,
    wordcolor: '#D1AA7A',
    width: '140.87px',
    height: '140.87px',
    position: 'translate(843px, 171px)'
  },
  {
    circle: '#D1E7E9',
    copy1: ` <td class="colour-change">Uranus</td> `,
    copy2: ` <td>2,870,658,186 km</td> `,
    copy3: ` <td>84.0 years</td> `,
    wordcolor: '#D1E7E9',
    width: '65.8px',
    height: '65.8px',
    position: 'translate(1030px, 209px)'
  },
  {
    circle: '#638FD8',
    copy1: ` <td class="colour-change">Neptune</td> `,
    copy2: ` <td>4,498,396,441 km</td> `,
    copy3: ` <td>164.8 years</td> `,
    wordcolor: '#638FD8',
    width: '59.73px',
    height: '59.73px',
    position: 'translate(1143px, 212px)'
  }
]

// pick the relevant tags
const nextTag = document.querySelector('div.next-area')
const previousTag = document.querySelector('div.prev-area')
const outputTag = document.querySelector('table td.column-1')
const outputTag2 = document.querySelector('table td.column-2')
const outputTag3 = document.querySelector('table td.column-3')
const circleTag = document.querySelector('section div.circle')
const wordcolorTag = document.querySelector('table td.column-1')
const widthTag = document.querySelector('section div.circle')
const heightTag = document.querySelector('section div.circle')
const positionTag = document.querySelector('section div.circle')

// make a next function increase the pageNumber
const next = function() {
  pageNumber = pageNumber + 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }

  updateSection()
}

// make a previous function to decrease the pageNumber
const previous = function() {
  pageNumber = pageNumber - 1

  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()
}


// this will update the section's content and style
const updateSection = function() {
  for (let i = 0; i <= pageNumber; i++) {
    outputTag.innerHTML = pages[i].copy1
    outputTag2.innerHTML = pages[i].copy2
    outputTag3.innerHTML = pages[i].copy3
    circleTag.style.backgroundColor = pages[i].circle
    wordcolorTag.style.color = pages[i].wordcolor
    widthTag.style.width = pages[i].width
    heightTag.style.height = pages[i].height
    positionTag.style.transform = pages[i].position
  }
}

// on click of nextTag, run this
nextTag.addEventListener('click', function() {
  next()
})

// on click of previousTag, run this
previousTag.addEventListener('click', function() {
  previous()
})

// when a user presses a key, check for arrow left or right,
// and do next or prev correctly
document.addEventListener('keyup', function(event) {
  console.log(event)

  //   if the key being pressed is ArrowRight
  if (event.key == 'ArrowRight') {
    next()
  }
  //   if the key being pressed is ArrowLeft
  if (event.key == 'ArrowLeft') {
    previous()
  }
})

const neil = document.querySelector('div.neil-cursor')

let mouseX = 0
let mouseY = 0

let neilX = 0
let neilY = 0

let speed = 0.03

function animate() {
  let distanceX = mouseX - neilX
  let distanceY = mouseY - neilY
  
  neilX = neilX + (distanceX * speed)
	neilY = neilY + (distanceY * speed)

  neil.style.left = neilX + 'px'
  neil.style.top = neilY + 'px'
  
  requestAnimationFrame(animate)
}

animate()

document.addEventListener('mousemove', function(event) {
  mouseX = event.pageX
  mouseY = event.pageY
})

// Basic way of creating a custom cursor that follows cursor around page
// document.addEventListener("mousemove", function(event) {
//   const mouseX = event.pageX
//   const mouseY = event.pageY

//   const neil = document.querySelector("div.neil-cursor")

//   neil.style.left = mouseX + "px"
//   neil.style.top = mouseY + "px"
// })


// moving the stars in the background
document.addEventListener('mousemove', function(event) {
  // mouse as % of page view
  var percentageX = event.pageX / window.innerWidth
  var percentageY = event.pageY / window.innerHeight

  // as % of total image size minus the browser view
  var imageX = percentageX * (3000 - window.innerWidth)
  var imageY = percentageY * (2000 - window.innerHeight)

  var tag = document.querySelector('img.stars')
  tag.style.left = -1 * imageX + 'px'
  tag.style.top = -1 * imageY + 'px'
})
