// const cryto  = require ("node:crypto")
const https = require("node:https")
const start = Date.now();
const MAX_CALLS = 12;
process.env.UV_THREADPOOL_SIZE = 4;

for(let i =1 ; i<=MAX_CALLS;i++){
    // cryto.pbkdf2("password","salt",10000,512,"sha512", ()=>{
        // console.log(`hash time for the ${i} ${Date.now() - start}`)
    // });

    https.get("https://www.google.com", (res) => {
        let data = '';
      
        res.on('data', (chunk) => {
          // Accumulate the received data
          data += chunk;
        });
      
        res.on('end', () => {
          console.log(`Request ${i} time ${Date.now() - start}`);
          // Process the accumulated data here
        });
      }).on('error', (err) => {
        console.error('Error:', err.message);
      });
}

console.log(Date.now() - start)
// cryto.pbkdf2Sync("password","salt",10000,512,"sha512")
// cryto.pbkdf2Sync("password","salt",10000,512,"sha512")
// cryto.pbkdf2Sync("password","salt",10000,512,"sha512")
// cryto.pbkdf2Sync("password","salt",10000,512,"sha512") 