function RandomID() {

    var length = 50,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()<>?/",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
        document.getElementById('textBox').value = retVal;
        
        var c = document.getElementById('copyBtn');
        c.innerHTML = "Copy text";
        c.style.borderColor = "#305d92"; 
    }

    function copyText() {
        /* Get the text field */
        var copyText = document.getElementById("textBox");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
        if (copyText.value != ""){

            /* Copy the text inside the text field */
            navigator.clipboard.writeText(copyText.value);

            /* Alert the copied text */
            //alert("Password Copied!");
            var c = document.getElementById('copyBtn');
            c.innerHTML = "Copied!";
            c.style.borderColor = "#338236"; 
            
        }
    
    }