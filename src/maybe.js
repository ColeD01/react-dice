  // const [numbers,setNumbers] = React.useState([null, null, null, null, null, null])

//   const [Numbers, setNumbers] = React.useState([
//     {
//       numbers:[{
//         num1:null,
//         num2:null,
//         num3:null,
//         num4:null,
//         num5:null,
//       }]
//     }
//   ])
// function rollDice() {
//   setNumbers(prevState => {
//     return {
//       numbers: prevState.numbers = Math.floor(Math.random() * 6) + 1
//     }
//   })
// } 
//   function rollDice() {
//     setNumbers(prevState => {
//       return {
//         numbers:[{
//           num1:prevState.num1 = Math.floor(Math.random() * 6) + 1,
//           num2:prevState.num1 = Math.floor(Math.random() * 6) + 1,
//           num3:prevState.num1 = Math.floor(Math.random() * 6) + 1,
//           num4:prevState.num1 = Math.floor(Math.random() * 6) + 1,
//           num5:prevState.num1 = Math.floor(Math.random() * 6) + 1,
//         }]
//       }
//     })
//   }
// function clearDice() {
//   setNumbers(prevState => {
//     return {
      
//     }
//   })
// }

// function clearDice() {
//   setNumbers(prevState => {
//     return{
//       numbers: [{
//         num1:null,
//         num2:null,
//         num3:null,
//         num4:null,
//         num5:null,
//       }]
//     }
//   })
// }
// const showDice = Numbers.numbers.map(number => <DiceBox key={number.index} number = {number} />)

// return (
//     <div>   
//       {showDice}
//       <button onClick={rollDice}> Roll Dice </button>
//       <button onClick={clearDice}> Clear Dice </button>
//     </div>
//   )
