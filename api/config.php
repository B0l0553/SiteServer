<?php
error_reporting(0);
$link = mysqli_connect("localhost", "tonpere", "03216987", "Koree");

if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>