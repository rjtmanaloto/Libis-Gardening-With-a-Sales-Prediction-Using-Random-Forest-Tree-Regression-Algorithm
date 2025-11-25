<?php
    $user = $_POST['text'];
    $password = $_POST['password'];
    
    $con = new mysqli("localhost","u149116150_Admin","Libisadmin123","u149116150_Libis");
    if($con->connect_error){
        die("Unauthorized : ".$con->connect_error);
    } else {
        $stmt = $con->prepare("select * from login where user = ?");
        $stmt->bind_param("s", $user);
        $stmt->execute();
        $stmt_result = $stmt->get_result();
        if($stmt_result->num_rows > 0){
            $data = $stmt_result->fetch_assoc();
            if($data['password'] === $password) {
                echo "<h2>Login Successfully Welcome Admin.<h2>
                        <h2>Redirecting you to Prediction database</h2>", header("location:https://mybinder.org/v2/gh/rjtmanaloto/LibisPredictionSystem/main?labpath=LICENSE");

            } else {
                echo "<h2>Access denied</h2>";
            }
        } else {
            echo "<h2>Access denied</h2>";
        }
    }
    $con->close();
?>