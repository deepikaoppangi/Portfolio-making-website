<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve the values submitted by the form
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subscribe = isset($_POST['subscribe']) ? 'Yes' : 'No';

    // Do something with the data, for example, store it in a database
    // Establish a connection to the database
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "user_details";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
    }

    // Prepare the data for insertion
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $message = mysqli_real_escape_string($conn, $_POST['message']);
    $subscribe = isset($_POST['subscribe']) ? 1 : 0;

    // Insert the data into the table
    $sql = "INSERT INTO details (name, email, message, subscribe) VALUES ('$name', '$email', '$message', '$subscribe')";

    if (mysqli_query($conn, $sql)) {
    echo "Data inserted successfully!";
    } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    // Close the database connection
    mysqli_close($conn);


    // Redirect the user to a thank you page
    header('Location: thank-you.html');
    exit;
}
?>
