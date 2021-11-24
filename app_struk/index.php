<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Struk Pembayaran</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <form action="">
        <label>
            <input type="text" name="resto" placeholder="Nama Resto">
        </label><br>
        <label>
            Tanggal :
            <input type="date" name="date">
            <input type="time" name="time">
        </label><br>
        <label>
            Nama Kasir :
            <input type="text" name="nama" placeholder="Nama">
        </label><br>
        <label for="">=================================
        </label><br>
        <label>
            <table>
                <tr>
                    <td>Nasi</td>
                    <td>...............................</td>
                    <td>Rp.5000</td>
                </tr>
                <tr>
                    <td>Lauk</td>
                    <td>...............................</td>
                    <td>Rp.10000</td>
                </tr>
                <tr>
                    <td>Minum</td>
                    <td>...............................</td>
                    <td>Rp.5000</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>...............................</td>
                    <td>Rp20000</td>
                </tr>
                <tr>
                    <td>
                        <button id="btnPrint" class="hidden-print">Print</button>

                    </td>
                </tr>
            </table>
        </label>
    </form>

    <script src="story.js"></script>
</body>

</html>