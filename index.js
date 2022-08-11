function RandomID() {
    const value = Math.random().toString(36).substring(2,8);

    var length = 50,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()<>?/",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
        document.getElementById('textBox').value = retVal;

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
            alert("Password Copied!");

        }
    
    }