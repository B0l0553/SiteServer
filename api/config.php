<?php
error_reporting(0);
$link = mysqli_connect("localhost", "root", "Minecraft*2015", "Koree");

if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>