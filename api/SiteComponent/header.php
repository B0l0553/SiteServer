<?php
$header = "<header class='navigation-bar'>
    <a href='/'>
        <img class='title' src='src/main/drogu.png' />
    </a>
    <div class='right' style='margin-right: 1vw'>
        <div id='user-dropdown'>
            <img id='pfp' src='".$_SESSION['pfp']."' /><p id='username'>".$_SESSION['username']."</p>
            <div id='dropdown-content'>
                <a href='profile.php'>Profile</a>
                <a href='logout.php'>Logout</a>
            </div>
        </div>
    </div>
</header>";
?>