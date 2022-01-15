<?php
session_start();

if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login.php");
    exit;
}

if(isset($_POST['submit'])){
    require_once "../api/config.php";

    $sqlRequest = mysqli_query($link, sprintf("UPDATE users SET username = '%s' WHERE id = %d",
    mysqli_real_escape_string($link, $_POST["name"]),
    $_SESSION["id"]
    )) or die (mysqli_error($link));
    $_SESSION["username"] = $_POST["name"];

    if (count($_FILES['file']) == 1) {
        $filename = $_FILES['file']["name"][0];
        $tmpFilePath = $_FILES['file']['tmp_name'][0];
        if ($tmpFilePath != ""){
            $newFilePath = "/resources/users/" . $filename;
            if(move_uploaded_file($tmpFilePath, $newFilePath)) {
                $sqlImageRequest = mysqli_query($link, sprintf("SELECT profile_picture FROM users WHERE id = %d", $_SESSION["id"])) or die (mysqli_error($link));
                if ($value = mysqli_fetch_assoc($sqlImageRequest)) {
                    unlink($value["profile_picture"]);
                }
                mysqli_free_result($sqlImageRequest);
                $_SESSION["pfp"] = $newFilePath;
                $sqlImageUpdateRequest = mysqli_query($link, sprintf("UPDATE users SET profile_picture = '%s' WHERE id = %d", mysqli_real_escape_string($link, $newFilePath), $_SESSION["id"])) or die (mysqli_error($link));
            }
        }
    }

    header("location: /");
}
?>