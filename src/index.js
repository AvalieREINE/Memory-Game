/*const circle = document.querySelector('.circle')
let xAxis = 0
let yAxis = 0

function Control(e){
    switch (e.key){
        case 'ArrowLeft':
            xAxis -=50
            circle.style.left = xAxis + 'px'
            break
        case 'ArrowRight':
            xAxis +=50
            circle.style.left= xAxis + 'px'
            break
        case 'ArrowUp':
            yAxis -=50
            circle.style.top = yAxis + 'px'
            break
        case 'ArrowDown':
            yAxis +=50
            circle.style.top = yAxis + 'px'
            break
    default:
        console.log('key not recognized')
    }
}

document.addEventListener('keydown', Control)

const circle = document.querySelector('.circle')
const mouth= document.querySelector('#mouth')

function Control(e){
    switch (e.key){
        case 'ArrowUp':
            mouth.classList.remove('sad-mouth')
            mouth.classList.add('happy-mouth')
            break

        case 'ArrowDown':
            mouth.classList.remove('happy-mouth')
            mouth.classList.add('sad-mouth')
            break	
         default:
                console.log('key not recognized')
    }
}


  document.addEventListener('keydown', Control)
  */

  document.addEventListener('DOMContentLoaded',() =>{
      const cards = [
       {
        name : 'fries',
        img :  'src/img/fries.png',
          },
          {
            name :  'cheeseburger',
            img :  'src/img/cheeseburger.png',
         },
         {
            name:  'ice-cream',
            img :  'src/img/ice-cream.png',
            },
       
         {
         name :  'pizza',
         img :  'src/img/pizza.png',
         },
        {
        name :  'milkshake',
        img :  'src/img/milkshake.png',
        } ,
        {
         name :  'hotdog',
         img :  'src/img/hotdog.png',
         },
         {
            name :  'fries',
            img :  'src/img/fries.png',
            },
            {
              name:  'cheeseburger',
              img :  'src/img/cheeseburger.png',
           },
        
          {
           name :  'ice-cream',
           img :  'src/img/ice-cream.png',
           }, 
           {
           name : 'pizza',
           img :  'src/img/pizza.png',
           },
          {
          name :  'milkshake',
          img :  'src/img/milkshake.png',
          } ,
          {
           name :  'hotdog',
           img :  'src/img/hotdog.png',
           },
      ]
      
  

  cards.sort(() =>0.5 - Math.random())
  console.log(cards)
 

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenIds = []
  let cardsWon= []

  function createBoard (){
      for (let i = 0; i < cards.length; i++){
          const card = document.createElement('img')
          card.setAttribute('src', 'src/img/blank.png')
          card.setAttribute('data-id', i)
          card.addEventListener('click', flipCard)
          grid.appendChild(card)
      }
  } 
  

  function flipCard(){
     let cardID = this.getAttribute('data-id')
   
     cardsChosen.push(cards[cardID].name)
    
     cardsChosenIds.push(cardID)
    
     this.setAttribute('src', cards[cardID].img)
     if (cardsChosen.length === 2 ){
         setTimeout(checkForMatch, 500)
     }
  }

  function checkForMatch(){
      const cardss= document.querySelectorAll('img')
      const optionOneId= cardsChosenIds[0]
      const optionTwoId= cardsChosenIds[1]

      if (optionOneId == optionTwoId){
          alert('you have clicked the same image!')
          cardss[optionOneId].setAttribute('src', 'src/img/blank.png')
          cardss[optionTwoId].setAttribute('src', 'src/img/blank.png')
      } else if(cardsChosen[0] === cardsChosen[1]) {
          alert('you have found a match !')
          cardss[optionOneId].setAttribute('src', 'src/img/white.png')
          cardss[optionTwoId].setAttribute('src', 'src/img/white.png')
          cardss[optionOneId].removeEventListener('click', flipCard)
          cardss[optionTwoId].removeEventListener('click', flipCard)
          cardsWon.push(cardsChosen)
 
      }else {
        cardss[optionOneId].setAttribute('src', 'src/img/blank.png')
        cardss[optionTwoId].setAttribute('src', 'src/img/blank.png')
        alert('sorry,try again!')
      }
      cardsChosen= []
      cardsChosenIds= []
      resultDisplay.textContent= cardsWon.length
      if(cardsWon.length===cards.length /2 ){
          resultDisplay.textContent = 'congrats, you have won!'
      }
  }

  createBoard()
  } )
 