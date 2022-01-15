<?php
$mini_header = 
"<header class='navigation-bar'>
    <a href='/'>
        <img class='title' src='/resources/site/imgs/logo.webp' />
    </a>
</header>";

$header = 
"<header class='navigation-bar'>
    <a href='/'>
        <img class='title' src='/resources/site/imgs/logo.webp' />
    </a>
    <div class='right' style='margin-right: 1vw'>
        <div id='user-dropdown'>
            <img id='pfp' src='".$_SESSION['pfp']."' style='border-radius: 10vw;' /><p id='username'>".$_SESSION['username']."</p>
            <div id='dropdown-content'>
                <a href='/profile/'>Profile</a>
                <a href='/logout.php'>Logout</a>
            </div>
        </div>
    </div>
</header>";

$footer =
'<footer>
    <div id="footer-content">@Copyrights B0l0553TM</div>
</footer>';
?>