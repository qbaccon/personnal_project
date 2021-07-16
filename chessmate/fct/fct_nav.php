<?php
if (isset($_POST['replay']))
	header("Refresh:0");

if (isset($_POST['continue_to_soldier2']))
	header("Location:init_pion2.php");

if (isset($_POST['continue_to_tower']))
	header("Location:init_tour.php");

if (isset($_POST['continue_to_horseman']))
	header("Location:init_chev.php");

if (isset($_POST['continue_to_jester']))
	header("Location:init_fou.php");

if (isset($_POST['continue_to_queen']))
	header("Location:init_reine.php");

if (isset($_POST['continue_to_king']))
	header("Location:init_roi.php");

if (isset($_POST['continue_to_king2']))
	header("Location:init_roi2.php");

if (isset($_POST['continue_to_king3']))
	header("Location:init_roi3.php");

if (isset($_POST['continue_to_end']))
	header("Location:index.php");