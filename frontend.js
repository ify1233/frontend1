
let getGreetingBtn = document.getElementById('getGreeting')
let ffBtn = document.getElementById('ff')
let ggg = document.getElementById('greeting')


// let greeting = document.getElementById('greeting'),
// getGreetingBtn = document.getElementById('getGreeting'),
let setGreetingBtn = document.getElementById('setGreeting')
// userInput = document.getElementById('userInput')
let TokenContract = './abi.json';
// fetch(TokenContract)
// .then(data => data.json())
// .then(info => console.log(info))

let selectedAddress;
let wallletObj;
let abi;
let _token;
let _provider;



const fetchData = async ()=>{   
    let result =  await fetch(TokenContract)
    const returndata = await result.json()
    abi = returndata.abi
    return abi;
}



async function connect (){
  fetchData();
  selectedAddress = await window.ethereum.request({method:'eth_requestAccounts'});
  _provider = new ethers.providers.Web3Provider(window.ethereum);
  
  _token = new ethers.Contract(
    '0xF2C59B8D103FD8993993E74F66c398fB7d168265', //contract address
    abi, //abi code of our contract
    _provider.getSigner(0) //signer object 
  );
}


getGreetingBtn.addEventListener('click', function () {

    connect();
});

//console.log(_token, 'token obj')
console.log(abi)
async function  getGreeting (){
   let result = await _token.check()
   ggg.innerHTML = result;
}

async function setGreeting (){
  userInput.value

  console.log(typeof userInput.value)
 let result =    await _token.update(userInput.value)

}


// getGreetingBtn.addEventListener('click', getGreeting)
setGreetingBtn.addEventListener('click', setGreeting)

ffBtn.addEventListener('click', getGreeting)
