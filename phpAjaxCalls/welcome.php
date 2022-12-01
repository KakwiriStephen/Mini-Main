<!DOCTYPE html>
<html>

<head>
    <title>Search User</title>
    <link rel="stylesheet" href="https://bootswatch.com/5/cerulean/bootstrap.min.css">
</head>

<script>
    function showSuggestion(str) {
        if (str.length == 0) {
            document.getElementById('output').innerHTML = '';
        }

    }
</script>

<body>
    <div class="container">
        <h1>
            Search Users
        </h1>
        <form>
            Search User <input type="text" class="form-control" onkeyup="showSuggestion(this.value)">
        </form>
        <p>Suggestions: <span id="output" style="font-weight: bold;"></span> </p>
    </div>





</body>

</html>