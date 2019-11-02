<?php

// $mahasiswa = [
// [
//     "nama" => "bagus",
//     "nim" => "1512500941",
//     "email" => "bagus237@gmail.com"
// ],
// [
//     "nama" => "joni",
//     "nim" => "1314500821",
//     "email" => "jonijoniyespapa@gmail.com"
// ]
// ];

$dbh = new PDO('mysql:host=localhost;dbname=aplikasi_stok', 'root');

$db = $dbh->prepare('Select * from users');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);
$data = json_encode($mahasiswa);
echo $data;
?>