<?php
    // Initialize the session
    session_start();
    if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
        header("location: login.php");
        exit;
    }
    require_once "api/sitecomp.php";
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        
    </head>
    <body>
        <div>
            WI
        </div>
    </body>
</html>