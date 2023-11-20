var romanToInt = function(s) {
    let sum = 0;
    let roman = {"I":1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M":1000};
    
    for (let i = 0 ; i < s.length; i++) {

        if (s[i] === "I" && s[i+1] === "V") {
            sum+= 4;
            i+=1;
        }
        else if (s[i] === "I" && s[i+1] === "X") {
            sum+= 9;
            i+=1;
        }
        else if (s[i] === "X" && s[i+1] === "L") {
            sum+= 40;
            i+=1;
        }
        else if (s[i] === "X" && s[i+1] === "C") {
            sum+= 90;
            i+=1;
        }
        else if (s[i] === "C" && s[i+1] === "D") {
            sum+= 400;
            i+=1;
        }
        else if (s[i] === "C" && s[i+1] === "M") {
            sum+= 900;
            i+=1;
        }
        else{
                sum+= roman[s[i]];
        }   
    }
    return sum;
       
    }