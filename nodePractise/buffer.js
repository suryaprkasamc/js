const buffer = new Buffer.from("SURYA");
console.log(buffer.toJSON()) // charset of the string
console.log(buffer ) // hexa decimal representation of the binary code
buffer.write("code")
console.log('',buffer.toString() )