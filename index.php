<?php
    // Initialize the session
    session_start();
    if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
        header("location: /login");
        exit;
    }
    require_once "api/sitecomp.php";
    require_once "api/config.php";
    $SqlPostRequest = mysqli_query($link, "SELECT * FROM posts;");
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
            <div id="wrapper">  
                <div id="post-wrapper">
                    <h1>RECENT POSTS</h1>
                    <?php
                        while ($values = mysqli_fetch_assoc($SqlPostRequest)) {
                            $SqlCommentRequest = mysqli_query($link, "SELECT * FROM comments WHERE post_id = ". $values["id"].";");
                            while($comment = mysqli_fetch_assoc($SqlCommentRequest)){
                                $commentsSection .= sprintf("
                                <div id='comment'>
                                    <p>Posted by 
                                        <a id='user-poster' href='/users?id=%s'>%s</a>
                                    </p>
                                    <p id='extra-info'>%s - Comment Id %s</p>
                                    <p id='comment-content'>%s</p>
                                </div>
                                ", $comment["user_id"], $comment["username"], $comment["created_at"], $comment["id"], $comment["content"]);
                            }
                            if($_SESSION["id"] == $values["user_id"]) {
                                $pstby = "<b style='color: rgb(184, 24, 152);'>you</b>";
                            } else {
                                $pstby = sprintf("<a id='user-poster' href='/users?id=%s'>%s</a>", $values["user_id"], $values["username"]);
                            }

                            echo sprintf("
                            <div id='post'>
                                <div id='post-content'>
                                    <div id='post-title'>%s</div>
                                    <p>%s</p>
                                    <p id='pstby' >Posted by %s the %s</p>
                                    
                                </div>
                                <div id='comment-wrapper'>
                                    <div id='comments'>
                                        %s
                                    </div>
                                </div>
                            </div>
                            ", $values["title"], $values["content"], $pstby, $values["created_at"], $commentsSection);
                        }
                        mysqli_free_result($SqlPostRequest);
                    ?>
                            
                </div>
            </div>
            <?php echo $footer; ?>
        </div>
    </body>
</html>