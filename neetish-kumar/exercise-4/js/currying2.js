function fourDigit(){
    return function sixDigits(){
        return function eightDigits(){
            return function customDigits(lengthOfNumber){
                var ranNum = "123456789";
                var randomNumber = '';
                for (var i=0; i<lengthOfNumber; i++) {
                    var rnum = Math.floor(Math.random() * ranNum.length);
                    randomNumber += ranNum.substring(rnum,rnum+1);
                }
                document.write("<h2>The Four Digit Number is : " + Math.floor(1000 + Math.random() * 9000) + "</h2>");
                document.write("<h2>The Six Digit Number is : " +   Math.floor(100000 + Math.random() * 900000) + "</h2>");
                document.write("<h2>The Eight Digit Number is : " + Math.floor(10000000 + Math.random() * 90000000) + "</h2>");
                if (lengthOfNumber <= 0) {
                    document.write("<h2> We can't give anything Please enter greater then 0 </h1>")
                }else{
                    document.write("<h2>The Custom Digit Number is : " + randomNumber + "</h2>");
                    document.write("<br/>");
                }
                
            }
        }
    }

}

fourDigit()()()(2);


