var jmlAngkot = 10;
var angkotBeroperasi = 6 ;

for (var noAngkot = 1 ; noAngkot <= jmlAngkot ; noAngkot ++ ) {
 
    if ( noAngkot <= angkotBeroperasi ) {
        console.log ( 'Nomor Angkot ' + noAngkot + ' Sedang Beroperasi')
    } else if ( noAngkot === 8) {
        console.log ( 'Nomor Angkot '+ noAngkot + ' Sedang Lembur')
    } else {
            console.log ( 'Nomor Angkot ' + noAngkot +' Tidak Bisa Beroperasi')
    }
}