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
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Main Board</title>
        <link rel="icon" href="favicon.ico">
        <link rel="stylesheet" href="styles/general.css">
    </head>
    <body>
        <div id="app">
            <?php echo $header; ?>
            <div>

            </div>
            <?php echo $footer; ?>
        </div>
    </body>
</html>