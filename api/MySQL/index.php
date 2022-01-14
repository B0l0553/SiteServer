<?php
error_reporting(0);
$link = mysqli_connect("localhost", "root", "Minecraft*2015", "droguerie");

if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>