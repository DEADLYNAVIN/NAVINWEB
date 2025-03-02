<!-- <?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gym";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$gender = $_POST['gender'];
$country = $_POST['country'];
$email = $_POST['email'];
$query = $_POST['query'];

// Insert data into the contact table
$sql = "INSERT INTO contact (firstname, lastname, gender, country, email, query) VALUES ('$firstname', '$lastname', '$gender', '$country', '$email', '$query')";

if ($conn->query($sql) === TRUE) { 
    echo "<script>alert('We got Your Message! 😉');</script>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?> -->
