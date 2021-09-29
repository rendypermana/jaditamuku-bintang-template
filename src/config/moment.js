var moment = require('moment-timezone');
moment().tz("Asia/Jakarta");
moment.locale("id");  
moment.updateLocale('id', {
    months : [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli",
        "Agustus", "September", "Oktober", "November", "Desember"
    ],
    monthsShort : [
        "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
        "Jul", "Agu", "Sep", "Okt", "Nov", "Des"
    ]
});