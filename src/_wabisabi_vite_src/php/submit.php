<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>
    <main>
        <pre>required xampp server running</pre>
        <div class="container">
            <div class="row">

                <?php
                echo '<p>current URL</p>';
                echo 'localhost/wabisabi/submit.php';

                echo '<hr>';

                echo '<p>$_GET</p>';
                var_dump($_GET);

                echo '<hr>';

                echo '<p>check mysql connection</p>';
                // Check connection
                $mysqli = new mysqli("localhost", "root", "", "wabisabi");
                if ($mysqli->connect_errno) {
                    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
                    exit();
                } else {
                    print_r($mysqli);
                    // print_r(date('Y-m-d H:i:s'));
                }

                echo '<hr>';

                // sanitize data
                $submission_date = date('Y-m-d H:i:s');
                $fullname = $_GET["fullname"];
                $email = $_GET["email"];
                $phone = $_GET["phone"];

                echo '<hr>';

                // check if email unique
                if ($email != "") {
                    echo "<p>Check email is unique: " . $email . "</p>";

                    // https://www.php.net/manual/en/mysqli.prepare.php
                    $stmt = $mysqli->prepare("SELECT email FROM basic_webform where email=?");
                    $stmt->bind_param("s", $email);
                    $stmt->execute();
                    $result = $stmt->get_result();
                    // print_r($result);

                    // print_r($result->num_rows);
                    if ($result->num_rows >= 1) {
                        echo 'E-mail already exists! Returning...';

                        echo '<br>';
                        echo '<a href="http://localhost/wabisabi/get_webform_data.php">Check Datatables</a>';

                        // header('Location: http://localhost:3000/');
                        exit;
                    }

                    // print all row
                    // while ($myrow = $result->fetch_assoc()) {
                    //     print_r($myrow);
                    //     echo '<br>';
                    // }
                }

                echo '<hr>';

                // prepare and bind
                $stmt = $mysqli->prepare("INSERT INTO basic_webform (submission_date, fullname, email, phone) VALUES (?, ?, ?, ?)");

                $stmt->bind_param("ssss", $submission_date, $fullname, $email, $phone);
                $stmt->execute();

                echo "New records created successfully";

                echo '<br>';

                echo '<a href="http://localhost/wabisabi/src/php/get_webform_data.php">Go to Datatables</a>';

                echo '<hr>';

                $stmt->close();
                $mysqli->close();

                ?>
            </div>
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>

</html>