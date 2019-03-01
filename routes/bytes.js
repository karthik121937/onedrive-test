
var chilkat = require('@chilkat/ck-node11-linux64');


function chilkatExample() {

    // This example requires the Chilkat API to have been previously unlocked.
    // var glob = new chilkat.Global();
    var glob = new chilkat.Global();
    var success = glob.UnlockBundle("Anything for 30-day trial");

    var http = new chilkat.Http();
    http.AuthToken = "EwBwA8l6BAAURSN/FHlDW5xN74t6GzbtsBBeBUYAAf+mOwPUXI5zRBLrkx4yQnr+GlEdobUyfz3XycuVXH+mVaSELtwjpfyNFRXWMeP/vMxNYL721AJn0gDlgl3P3M1zdgvqcKu3KTC/WNlFqtN3YYlwcDROJyLZcwSzIVuiN5bDD6I9AOdVHExGaglXMm+MuIogbwX1YKsYPlzdf6pF6/8Gb+TqX5qBDuMBYqqTtcNK+mAn+lHZ415uDqRIuRSqMdHHQrbPrn+P66Q6ze3qmn6etwkjHRRbTzBzNKy+F+KSwhAcJmchHTr2j8J4/KVtnntKWCgi0tNcgGPuUKIinQONJ+OQpuUQIRWX+yqqlVeNXqys4p/TdDWkI7hisywDZgAACJz1clxVrIz8QAJaesFHxJYBsux0iok7A6cNj4rs/O3QQYAJJOZetu7f7pWownjNmAbIk+ymB9VENGEt/CRlJulwXSPwlI9CoVTukbvjTsuvUijrBkLhyUDcoj3bsKkD3DZjOfMU2m2s7cxY+MwsRzsxqdi4fXXqESL93PDz0wEJDuEPQkdi/PPYFdvO1b5pvQi/SZ7zvl1DkG/f17WAR/k7VGyjxMJuG9QsAZGOJNMZGrqTl2r2UZ/7Mz6PAgCDLKt9sqBsrvIN132P6Yf+Dx0vagTMbCkkGFB6Icd1bvQW0T9+9eW4R8xoMtXAzCzjOLUsOd+HfCfYSn1opYvE8PWyp8WSRPX9Kw9ckcW1Tl8/GCoKrHlkBzErXwj0a8onNZpxYVTsfw1Zm+xe0sCJpSgE02nAxicUHHGSdLI6k58jze/zrhZR9iPQSiom+ndHc7ddMUnlZWGYM9TSHG697StK90sd1lm5wqUBdsIPMvRN4kFXn9xbI+UzGSKkQFcIDsfgs0E5Rb//FPmQsbiBrIt+onE39Kin/qDFBZbsgYuHgEj6PUgXTW/8dyRrRP/D6Q85Wt2u30gz7IwfnK4MZnKpSqJLO459OWnqaERjzTQO2EM2gLBR50uKTktXxXhHjc2fxswaA9xIj/km8iNS9WKE6kWL3sGgPzxLNIlJkFGbEcVomvajuJ3PQyqat9tYELRqEAeQcdDxJbgdm+MGR5qlm7fMoms4DJTSI1PPyDGk1EAZbOZRQaY67waYdcxsErcy7+yWGpMgRY2DAg==";

    var resp = http.QuickGetStr("https://graph.microsoft.com/v1.0/users/me/drives");
    if (http.LastMethodSuccess !== true) {
        console.log(http.LastErrorText);
        return;
    }

    // The response should be JSON.
    var json = new chilkat.JsonObject();
    json.EmitCompact = false;
    json.Load(resp);
    if (http.LastStatus !== 200) {
        console.log(json.Emit());
        console.log("Response status = " + http.LastStatus);
        return;
    }

    console.log(json.Emit());
    var i = 0;
    var numDrives = json.SizeOfArray("value");
    while (i < numDrives) {
        json.I = i;
        console.log("-- Drive " + (i+1));
        console.log("id: " + json.StringOf("value[i].id"));
        // The size will be a number larger than what can fit in a 32-bit integer.
        // Get the integer as a string..
        console.log("total: " + json.StringOf("value[i].quota.total"));
        i = i+1;
    }
}

chilkatExample();