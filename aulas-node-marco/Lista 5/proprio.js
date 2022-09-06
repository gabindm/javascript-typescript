
try {
    const roman = require('./roman2');

    const num = process.argv[2];

    console.log(roman.toArabic(num)); 
}
		
catch (e) {
	console.log(e);
}
