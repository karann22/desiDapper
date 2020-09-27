    function validate(){
        

        var x = document.forms["myForm"]["usrid"].value;
        var y = document.forms["myForm"]["psswrd"].value;

        if (x == "admin" && y == "1234")
        {
            alert("Welcome to my website");
            return true;
        }
        else if (x == "admin" || (y != "1234" && y != ""))
        {
            alert("Please check Password");
            return false;
        }
        else if ((x != "admin" && x != "") || y == "1234")
        {
            alert("Please check Username");
            return false;
        }
        else{
          alert("Enter the required field(s)");
          return false;
        }
    }
