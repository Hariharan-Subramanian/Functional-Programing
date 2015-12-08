var new1 = [1, 2, 3, 4, 5, 6, 7];
Array.prototype.offset = function(index) {
    var len = index;
    var original = this;
    var a = '';
    var i = 1,
        j = 0,
        count = 1;
    while (i <= this.length) {
        if (i % len == 0) {
            j = len * count;
            while (j > ((count - 1) * len)) {
                j--;
                a += original[j];
            }
            count++;
            a += ','
        }
        i++;
    }
    if (this.length > (count - 1) * len) {
        var remain = this.length - ((count - 1) * len)
        i = 0;
        while (i < remain) {
            a += original[i + ((count - 1) * len)] + ',';
            i += 1;
        }
    }
    return a;
}
new1.offset(3);