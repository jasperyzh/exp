<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet" type="text/css">
</head>

<body>
    <main>
        <pre>required xampp server running</pre>
        <?php
        $mysqli = new mysqli("localhost", "root", "", "wabisabi");
        if ($mysqli->connect_errno) {
            echo "Failed to connect to MySQL: " . $mysqli->connect_error;
            exit();
        }

        $stmt = $mysqli->prepare("SELECT * FROM basic_webform");
        $stmt->execute();
        $result = $stmt->get_result();
        // print_r($result);

        // print all row
        // while ($myrow($key, $value) = $result->fetch_assoc()) {
        //     print_r($myrow);
        //     echo '<br>';
        // }

        /*  foreach ($result as $value) {
            print_r($value);
        } */
        /* while ($myrow = $result->fetch_assoc()) {
            print_r($myrow);
            echo '<br>';
        } */
        ?>
        <div class="container">
            <div class="row">

                <div class="col">

                    <p>for more examples: <a href="https://github.com/fiduswriter/Simple-DataTables/tree/main/docs">https://github.com/fiduswriter/Simple-DataTables/tree/main/docs</a></p>

                    <button class="csv">csv</button>
                    <button class="sql">sql</button>
                    <button class="txt">txt</button>
                    <button class="json">json</button>
                </div>
                <table id="myTable">
                    <thead>
                        <tr>
                            <?php
                            foreach ($result->fetch_assoc() as $key => $value) {
                                echo '<th>';
                                echo $key;
                                echo '</th>';
                            }
                            ?>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        foreach ($result as $value) {
                            echo '<tr>';
                            foreach ($value as $col) {
                                printf('<td>%s</td>', $col);
                            }
                            echo '</tr>';
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" type="text/javascript"></script>
    <script>
        const the_table = new simpleDatatables.DataTable("#myTable", {
            searchable: false,
            fixedHeight: true,
        })

        document.querySelector("button.csv").addEventListener("click", () => {
            the_table.export({
                type: "csv",
                download: true,
                lineDelimiter: "\n\n",
                columnDelimiter: ";"
            })
        })
        document.querySelector("button.sql").addEventListener("click", () => {
            the_table.export({
                type: "sql",
                download: true,
                tableName: "export_table"
            })
        })
        document.querySelector("button.txt").addEventListener("click", () => {
            the_table.export({
                type: "txt",
                download: true,
            })
        })
        document.querySelector("button.json").addEventListener("click", () => {
            the_table.export({
                type: "json",
                download: true,
                escapeHTML: true,
                space: 3
            })
        })
    </script>

</body>

</html>