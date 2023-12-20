var jmlAngkot = 10;
var angkotBeroperasi = 6 ;

for (var noAngkot = 1 ; noAngkot <= angkotBeroperasi ; noAngkot ++ ) {
    console.log ('Angkot dengan No ' + noAngkot +' Sedang Beroperasi')
}

for (var noAngkot = angkotBeroperasi + 1 ; noAngkot <= jmlAngkot ; noAngkot ++ ) {
    console.log ('Angkot dengan No ' + noAngkot +' Tidak bisa Beroperasi')
}