<?php
    // Initialize the session
    session_start();
    if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
        header("location: login.php");
        exit;
    }
    require_once "api/index.php";
    
    
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Penis</title>
        <link rel="icon" href="favicon.ico">
        <link rel="stylesheet" href="styles/general.css">
    </head>
    <body>
        <?php echo $header; ?>
        
        <?php echo $footer; ?>
    </body>
</html>