var isUgly = function(n) {
    let multiplier = n;
    if (multiplier === 0) {
        return false;
    }
    while (multiplier) { 
        if (multiplier > 1) { 
                if (multiplier % 2 === 0) {
                    multiplier = multiplier/2;
                }
                else if (multiplier % 3 === 0) {
                    multiplier = multiplier/3; 
                } 
                else if (multiplier % 5 === 0) {
                    multiplier = multiplier/5; 
                }   
                else {
                    return false;
                }
            } 
        else if (multiplier === 1) {
            return true;
        }
        else {
                return false;
        }
    }
}
