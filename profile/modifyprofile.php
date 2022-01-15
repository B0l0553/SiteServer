<?php
    // Initialize the session
    session_start();
    
    require_once "../api/config.php";
    require_once "../api/sitecomp.php";

    // Check if user -> login != redirect -> login 
    if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
        header("location: login.php");
        exit;
    }

    if (!isset($_GET["id"])) {
        $_GET["id"] = $_SESSION["id"];
    }

    if ($_GET["id"] != $_SESSION["id"]) {
        header("location: index.php");
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Profile</title>
        <link rel="stylesheet" href="/styles/general.css">
        <link rel="stylesheet" href="styles/profile.css">
        <link rel="icon" href="favicon.ico">
    </head>
    <body>
        <div id="app">
            <?php echo $header;
            $sqlUserRequest = mysqli_query($link, sprintf("SELECT username FROM users WHERE id = %d;", $_GET["id"])) or die (mysqli_error($link));
            if ($values = mysqli_fetch_assoc($sqlUserRequest)) {
                echo sprintf('
                <form action="changeprofile.php" method="POST" style="padding: 5vw;" enctype="multipart/form-data">
                    <label for="name">Pseudo<span id="red">*</span></label><br>
                    <input type="text" name="name" value="%s" required><br><br>
                    <label for="file">Nouvelle photo de profile</label><br>
                    <input type="file" name="file[]" accept=".png,.jpg,.jpeg,.gif,.apng,.bmp,.svg,.webp"><br><br>
                    <input type="submit" name="submit" value="Modifier">
                </form>',
                $values["username"]);
            }

            mysqli_free_result($sqlUserRequest);
            echo $footer; 
            ?>
        </div>
    </body>
</html>