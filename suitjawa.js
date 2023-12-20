//Menangkap Pilhan Player
var pl = prompt( ' Silahkan Pilih : gajah, semut, orang' );


//Menangkap pilhan komputer
//membangkitkan bilangan random
var komp = Math.random();
if ( komp < 0.34) {
    komp = 'gajah';
} else if (komp => 0.34 && comp <= 0.67) {
    komp = 'semut';
} else { 
    komp = 'orang'
}

var hasil ='';
// Menentukan Rules
if  ( pl == komp) {
    hasil = 'SERI';
} else if ( pl == 'gajah' && komp =='semut') {
    hasil = 'ANDA KALAH';
} else if ( pl == 'orang' && komp =='gajah') {
    hasil = 'ANDA KALAH';
} else if ( pl == 'semut' && komp == 'orang') {
    hasil = 'ANDA KALAH';
}

// Tampikan Hasilnya
alert ( hasil)