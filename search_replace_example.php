<!doctype html>
<html lang="en">
    <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Side by side</title>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <?php
                        include('simple_html_dom.php');
                        $html = file_get_html('https://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/published/html/regdoc1-4-1/index.cfm');
                        $content = $html->find('div[id="wb-main"]',0);
                        echo $content;
                    ?>
                </div>
                <div class="col">
                    <?php
                        include('replacements.php');
                        //$replacements = json_decode($json, true);
                        //var_dump($replacements);
                        $content = str_replace(array_keys($replacements), $replacements, $content, $i);
                        include('removals.php');
                        $content = str_replace(($removals), '', $content, $x);
                        echo $content;
                        echo ("<h1>".$i." WET replacements</h1>");
                        echo ("<h1>".$x." removal</h1>");
                    ?>
                </div>
            </div>
        </div>                                                                          
    <!-- Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
</html>