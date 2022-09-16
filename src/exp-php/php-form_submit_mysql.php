                <?php
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
                        exit;
                    }
                    // print all row
                    // while ($myrow = $result->fetch_assoc()) {
                    //     print_r($myrow);
                    //     echo '<br>';
                    // }
                }

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