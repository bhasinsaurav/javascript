const accountId = 144553

let accountEmail = "example@example.com"

var accountPassword = "12345"

accountCity= "Delhi"

let accountState;

// accountId = 2. // to allowed

accountEmail = "hc@hc.com"

accountPassword = "1234567890"

accountCity = "Bengaluru"

console.log(accountId);

/**
 * Prefer not to use var because of the issue in block scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
