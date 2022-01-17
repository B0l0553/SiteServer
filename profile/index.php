<?php
    // Initialize the session
    session_start();
    
    require_once "../api/config.php";
    require_once "../api/sitecomp.php";
    // Check if user -> login != redirect -> login 
    if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
        header("location: /");
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
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <?php
            if($_GET["id"] == $_SESSION["id"]) {
                echo sprintf("<title>My Profile</title>");
            }
        ?>
        <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">-->
        <link rel="stylesheet" href="/styles/general.css">
        <link rel="stylesheet" href="/styles/profile.css">
        <link rel="icon" href="favicon.ico">
    </head>
    <body>
        <div id="app">
            
            <?php 
            if($_GET["id"] == $_SESSION["id"]) {
                echo $mini_header;
            } else
            {
                echo $header;
            }
            ?>
            
            <div class="main-profile-wrapper">
                <div class="prof">
                    <div class="profile-container">
                        <div class="wrapper">
                        <?php
                            $sqlUserRequest = mysqli_query($link, sprintf("SELECT id, username, avatar, created_at FROM users WHERE id = %d;", $_GET["id"])) or die (mysqli_error($link));
                            if ($userValues = mysqli_fetch_assoc($sqlUserRequest)) {
                                echo sprintf("
                                <div id='pfp-border'>
                                    <button id='pfp-click' title='Click to change me!'>
                                        <img id='pfp-profile' src='%s' onerror=\"this.onerror=null;this.src='/resources/site/imgs/dirt.jpg';\" />
                                    </button>
                                </div>
                                <div id='user-info'>
                                    <h1>%s</h1>
                                    <p>Compte créé le %s</p>
                                
                                ", htmlspecialchars($userValues["avatar"]),
                                htmlspecialchars($userValues["username"]),
                                date("j M. Y", strtotime($userValues["created_at"])));

                                if ($userValues["id"] == $_SESSION["id"]) {
                                    echo sprintf("<a href='modifyprofile.php?id=%d'>Modify</a></div>", $_SESSION["id"]);
                                }
                            }
                            mysqli_free_result($sqlUserRequest);
                        ?>
                        </div>
                    </div>
                </div>
                <div id="me">
                    <div>
                        
                    </div>
                </div>
            </div>
            
            <?php echo $footer; ?>
        </div>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script type="text/javascript" src="/scripts/avatar-changer.js"></script>
    </body>
</html>