var indicator = document.getElementById("pass")

    function passwordStrength(password) {
        
        const patterns = {
            digit: /\d/,
            lowercase: /[a-z]/,
            uppercase: /[A-Z]/,
            special: /[^A-Za-z0-9]/
        };
    
        
        const minLength = 8;
    
        
        let strength = 0;
    
       
        if (password.length >= minLength) {
            strength += 1;
        }
    
        
        for (let pattern in patterns) {
            if (patterns[pattern].test(password)) {
                strength += 1;
            }
        }
    
        
        if (strength <= 2) {
            return "Weak";
        } else if (strength <= 3) {
            return "Moderate";
        } else if (strength <= 4) {
            return "Strong";
        } else {
            return "Very Strong";
        }
    }
    
    
    console.log(passwordStrength("password")); 
    console.log(passwordStrength("P@ssw0rd")); 
    console.log(passwordStrength("MyP@ssw0rd123")); 
    
