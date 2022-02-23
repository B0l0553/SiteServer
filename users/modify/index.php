<?php
    // Initialize the session
    session_start();
    
    require_once "../../api/config.php";
    require_once "../../api/sitecomp.php";

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

    if(isset($_POST['submit'])){
        $sqlRequest = mysqli_query($link, sprintf("UPDATE users SET username = '%s' WHERE id = %d",
        mysqli_real_escape_string($link, $_POST["name"]), $_SESSION["id"])) or die (mysqli_error($link));
        $_SESSION["username"] = $_POST["name"];
        if (count($_FILES['file']) > 0) {
            $filename = $_FILES['file']["name"][0];
            $tmpFilePath = $_FILES['file']['tmp_name'][0];
            if ($tmpFilePath != ""){
                $newFilePath = "../../resources/users/" . $filename;
                
                if(move_uploaded_file($tmpFilePath, $newFilePath)) {
                    $sqlImageRequest = mysqli_query($link, sprintf("SELECT avatar FROM users WHERE id = %d", $_SESSION["id"])) or die (mysqli_error($link));
                    if ($value = mysqli_fetch_assoc($sqlImageRequest)) {
                        unlink($value["avatar"]);
                    }
                    mysqli_free_result($sqlImageRequest);
                    $_SESSION["pfp"] = $newFilePath;
                    $sqlImageUpdateRequest = mysqli_query($link, sprintf("UPDATE users SET avatar = '%s' WHERE id = %d", mysqli_real_escape_string($link, $newFilePath), $_SESSION["id"])) or die (mysqli_error($link));
                }
            }
        }
        header("location: /profile/");
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
                <form action="%s" method="POST" style="padding: 5vw;" enctype="multipart/form-data">
                    <label for="name">Pseudo<span id="red">*</span></label><br>
                    <input type="text" name="name" value="%s" required><br><br>
                    <label for="file">Nouvelle photo de profile</label><br>
                    <input type="file" name="file[]" accept=".png,.jpg,.jpeg,.gif,.apng,.bmp,.svg,.webp"><br><br>
                    <input type="submit" name="submit" value="Modifier">
                </form>', htmlspecialchars($_SERVER["PHP_SELF"]), 
                $values["username"]);
            }

            mysqli_free_result($sqlUserRequest);
            echo $footer; 
            ?>
        </div>
    </body>
</html>