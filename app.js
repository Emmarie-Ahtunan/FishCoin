// Replace API_KEY with your Nessie API key
const API_KEY = 'your_api_key_here';

// Replace ACCOUNT_ID with the ID of the account you want to retrieve
const ACCOUNT_ID = 'your_account_id_here';

// Make an API request to retrieve the account information
fetch(`http://api.nessieisreal.com/accounts/${ACCOUNT_ID}?key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    // Log the account data to the console
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

// Make an API request to retrieve the list of all accounts
fetch(`http://api.nessieisreal.com/accounts?key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    // Log the list of accounts to the console
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

// Make an API request to initiate a transfer
fetch('http://api.nessieisreal.com/transfers?key=${API_KEY}', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    medium: 'balance',
    payee_id: 'your_payee_account_id_here',
    amount: 100.00,
    description: 'Sample transfer'
  })
})
.then(response => response.json())
.then(data => {
  // Log the transfer data to the console
  console.log(data);
})
.catch(error => {
  console.error(error);
});
