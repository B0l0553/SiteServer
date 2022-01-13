<?php
    // Initialize the session
    session_start();
    
    require_once "api/config.php";
    // Check if user -> login != redirect -> login 
    if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
        header("location: login.php");
        exit;
    }

    if (!isset($_GET["id"])) {
        $_GET["id"] = $_SESSION["id"];
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Profile</title>
        <link rel="stylesheet" href="styles/general.css">
        <link rel="stylesheet" href="styles/profile.css">
        <link rel="icon" href="favicon.ico">
    </head>
    <body>
        <div id="app">
            <?php require_once "header.php"; ?>
            <div class="ff">
                <?php
                    $sqlUserRequest = mysqli_query($link, sprintf("SELECT id, username, profile_picture, created_at, birthdate, gender FROM users WHERE id = %d;", $_GET["id"])) or die (mysqli_error($link));
                    if ($userValues = mysqli_fetch_assoc($sqlUserRequest)) {
                        echo sprintf("
                        <img id='pfp' style='height: 256px;' src='%s' />
                        <h1>%s</h1>
                        <p>Genre : %s</p>
                        <p>Anniversaire : %s (%d ans)</p>
                        <p>Compte créé le %s</p>
                        ", htmlspecialchars($userValues["profile_picture"]),
                        htmlspecialchars($userValues["username"]),
                        htmlspecialchars($userValues["gender"]),
                        date("j M. Y", strtotime($userValues["birthdate"])),
                        intval(date("Y"))-intval(date("Y", strtotime($userValues["birthdate"]))),
                        date("j M. Y", strtotime($userValues["created_at"])));

                        if ($userValues["id"] == $_SESSION["id"]) {
                            echo sprintf("<a href='modifyprofile.php?id=%d'>Modify</a>", $_SESSION["id"]);
                        }
                    }
                    mysqli_free_result($sqlUserRequest);
                ?>
            </div>
            <?php require_once "footer.php"; ?>
        </div>
    </body>
</html>