var publisher = {
    subscribers: {},
    on: function (type, fn, context) {
        fn = typeof fn === "function" ? fn : context[fn];
        
        if (typeof this.subscribers[type] === "undefined") {
            this.subscribers[type] = [];
        }
        this.subscribers[type].push({fn: fn, context: context || this});
    },
    remove: function (type, fn, context) {
        this.visitSubscribers('unsubscribe', type, fn, context);
    },
    fire: function (type, publication) {
        this.visitSubscribers('publish', type, publication);
    },
    visitSubscribers: function (action, type, arg, context) {
        var pubtype = type,
            subscribers = this.subscribers[pubtype],
            i,
            max = subscribers ? subscribers.length : 0;
            
        for (i = 0; i < max; i += 1) {
            if (action === 'publish') {
                subscribers[i].fn.call(subscribers[i].context, arg);
            } else {
                if (subscribers[i].fn === arg && subscribers[i].context === context) {
                    subscribers.splice(i, 1);
                }
            }
        }
    }
};

function makePublisher(o) {
    var i;
    for (i in publisher) {
        if (publisher.hasOwnProperty(i) && typeof publisher[i] === "function") {
            o[i] = publisher[i];
        }
    }
    o.subscribers = {};
}

var alpha = {
    a : ['alpha/a.jpg','alpha/a2.jpg','alpha/a3.jpg','alpha/a4.jpg','alpha/a5.jpg','alpha/a6.jpg'],
    b : ['alpha/b.jpg','alpha/b2.jpg','alpha/b3.jpg','alpha/b4.jpg','alpha/b5.jpg','alpha/b6.jpg'],
    c : ['alpha/c.jpg','alpha/c2.jpg','alpha/c3.jpg','alpha/c4.jpg','alpha/c5.jpg','alpha/c6.jpg'],
    ć : ['alpha/ć.jpg','alpha/ć2.jpg','alpha/ć3.jpg','alpha/ć4.jpg','alpha/ć5.jpg','alpha/ć6.jpg'],
    d : ['alpha/d.jpg','alpha/d2.jpg','alpha/d3.jpg','alpha/d4.jpg','alpha/d5.jpg','alpha/d6.jpg'],
    e : ['alpha/e.jpg','alpha/e2.jpg','alpha/e3.jpg','alpha/e4.jpg','alpha/e5.jpg','alpha/e6.jpg'],
    ę : ['alpha/ę.jpg','alpha/ę2.jpg','alpha/ę3.jpg','alpha/ę4.jpg','alpha/ę5.jpg','alpha/ę6.jpg'],
    f : ['alpha/f.jpg','alpha/f2.jpg','alpha/f3.jpg','alpha/f4.jpg','alpha/f5.jpg','alpha/f6.jpg'],
    g : ['alpha/g.jpg','alpha/g2.jpg','alpha/g3.jpg','alpha/g4.jpg','alpha/g5.jpg','alpha/g6.jpg'],
    h : ['alpha/h.jpg','alpha/h2.jpg','alpha/h3.jpg','alpha/h4.jpg','alpha/h5.jpg','alpha/h6.jpg'],
    i : ['alpha/i.jpg','alpha/i2.jpg','alpha/i3.jpg','alpha/i4.jpg','alpha/i5.jpg','alpha/i6.jpg'],
    j : ['alpha/j.jpg','alpha/j2.jpg','alpha/j3.jpg','alpha/j4.jpg','alpha/j5.jpg','alpha/j6.jpg'],
    k : ['alpha/k.jpg','alpha/k2.jpg','alpha/k3.jpg','alpha/k4.jpg','alpha/k5.jpg','alpha/k6.jpg'],
    l : ['alpha/l.jpg','alpha/l2.jpg','alpha/l3.jpg','alpha/l4.jpg','alpha/l5.jpg','alpha/l6.jpg'],
    ł : ['alpha/ł.jpg','alpha/ł2.jpg','alpha/ł3.jpg','alpha/ł4.jpg','alpha/ł5.jpg','alpha/ł6.jpg'],
    m : ['alpha/m.jpg','alpha/m2.jpg','alpha/m3.jpg','alpha/m4.jpg','alpha/m5.jpg','alpha/m6.jpg'],
    n : ['alpha/n.jpg','alpha/n2.jpg','alpha/n3.jpg','alpha/n4.jpg','alpha/n5.jpg','alpha/n6.jpg'],
    o : ['alpha/o.jpg','alpha/o2.jpg','alpha/o3.jpg','alpha/o4.jpg','alpha/o5.jpg','alpha/o6.jpg'],
    ó : ['alpha/ó.jpg','alpha/ó2.jpg','alpha/ó3.jpg','alpha/ó4.jpg','alpha/ó5.jpg','alpha/ó6.jpg'],
    p : ['alpha/p.jpg','alpha/p2.jpg','alpha/p3.jpg','alpha/p4.jpg','alpha/p5.jpg','alpha/p6.jpg'],
    q : ['alpha/q.jpg','alpha/q2.jpg','alpha/q3.jpg','alpha/q4.jpg','alpha/q5.jpg','alpha/q6.jpg'],
    r : ['alpha/r.jpg','alpha/r2.jpg','alpha/r3.jpg','alpha/r4.jpg','alpha/r5.jpg','alpha/r6.jpg'],
    s : ['alpha/s.jpg','alpha/s2.jpg','alpha/s3.jpg','alpha/s4.jpg','alpha/s5.jpg','alpha/s6.jpg'],
    ś : ['alpha/ś.jpg','alpha/ś2.jpg','alpha/ś3.jpg','alpha/ś4.jpg','alpha/ś5.jpg','alpha/ś6.jpg'],
    t : ['alpha/t.jpg','alpha/t2.jpg','alpha/t3.jpg','alpha/t4.jpg','alpha/t5.jpg','alpha/t6.jpg'],
    u : ['alpha/u.jpg','alpha/u2.jpg','alpha/u3.jpg','alpha/u4.jpg','alpha/u5.jpg','alpha/u6.jpg'],
    v : ['alpha/v.jpg','alpha/v2.jpg','alpha/v3.jpg','alpha/v4.jpg','alpha/v5.jpg','alpha/v6.jpg'],
    w : ['alpha/w.jpg','alpha/w2.jpg','alpha/w3.jpg','alpha/w4.jpg','alpha/w5.jpg','alpha/w6.jpg'],
    x : ['alpha/x.jpg','alpha/x2.jpg','alpha/x3.jpg','alpha/x4.jpg','alpha/x5.jpg','alpha/x6.jpg'],
    y : ['alpha/y.jpg','alpha/y2.jpg','alpha/y3.jpg','alpha/y4.jpg','alpha/y5.jpg','alpha/y6.jpg'],
    z : ['alpha/z.jpg','alpha/z2.jpg','alpha/z3.jpg','alpha/z4.jpg','alpha/z5.jpg','alpha/z6.jpg'],
    ź : ['alpha/ź.jpg','alpha/ź2.jpg','alpha/ź3.jpg','alpha/ź4.jpg','alpha/ź5.jpg','alpha/ź6.jpg'],
    ż : ['alpha/ż.jpg','alpha/ż2.jpg','alpha/ż3.jpg','alpha/ż4.jpg','alpha/ż5.jpg','alpha/ż6.jpg'],
    ' ' : ['alpha/undefined.png'],
    '&#9094;' : ['alpha/undefined.png'] 
};

var keys = {
    handleKeypress: function (e) {
        e = e || window.event; // IE
        
        if (e.which) {
            count.keys.push(e.which);
            keys.fire('textwrite', keys);
        }
    },
    handleKeydown: function (e) {
        e = e || window.event; // IE
        
        if (e.which === 8 || e.which === 46) {
            count.keys.pop(e.which);
            keys.fire('textdelete', keys);
        }
    },
    valueLength : function (e) {
        e = e || window.event; // IE

        if (e.ctrlKey && e.which === 86) {
            console.log('ctrl+v!');
            count.keys.push(e.which);
            keys.fire('copypast', keys);
        }
    }
};

var count = {
    c : get('count'),
    send : get('sendButton'),
    keys : [],
    length : function () {
        var txt = this.c.textContent,
            parts = txt.split(' '),
            len = this.keys.length;

        parts[0] = parseInt(parts[0], 10) - len;
        this.c.textContent = parts[0] + ' ' + parts[1] + ' ' + parts[2];
    },
    countDown : function () {
        var txt = this.c.textContent,
            parts = txt.split(' ');

        parts[0] = parseInt(parts[0], 10) - 1;
        this.c.textContent = parts[0] + ' ' + parts[1] + ' ' + parts[2];
    },
    countUp : function () {
        var txt = this.c.textContent,
            parts = txt.split(' ');

        parts[0] = parseInt(parts[0], 10) + 1;
        this.c.textContent = parts[0] + ' ' + parts[1] + ' ' + parts[2];
    },
    reset : function () {
        var txt = this.c.textContent,
            parts = txt.split(' ');

        parts[0] = 35;
        this.c.textContent = parts[0] + ' ' + parts[1] + ' ' + parts[2];
    }
};

var writeRansom = {
    ransomMessage : function () {
        return ransom.message;
    },
    imgWidth : function () {
        var windowWidth = viewWidth(),
            message = this.ransomMessage(),
            len = message.length,
            margin = 100;

        return (windowWidth - margin) / len;
    },
    writeMessage : function () {
        var result = get('result'),
            array = writeRansom.ransomMessage(),
            imgW = writeRansom.imgWidth() > 150 ? 150 : writeRansom.imgWidth();

        result.innerHTML = '';

        array.forEach(function (item, index) {
            alpha[item].shuffle();
            item = alpha[item][0];
            result.innerHTML += '<img src="' + item + '"' + ' ' + 'width="' + imgW + '"' + ' ' + 'height="' + imgW + '"' + ' ' + 'id="' + index + '">';
        });
    }
};

var mix = {
    message : function () {
        return ransom.message;
    },
    rotate : function () {
        var message = mix.message(),
            id;
        message.filter(function(item, index) {
            id = get(index);
            index % 2 === 0 ? id.setAttribute('class', 'rotate') : null;
        });
    },
    zoom : function () {
        var message = mix.message(),
            id;
        message.forEach(function(item, index) {
            id = get(index);
            id.setAttribute('class', 'zoom');
        })
    }
    
};

var ransom = {
    message : [],
    getValue : function (e) {
        var input = get('inputMessage'),
            value = input.value,
            array = value.split('');
        
        ransom.message = array.clone();

        ransom.fire('value', ransom);
        ransom.fire('reset', ransom);

        input.value = '';

        if (typeof e.stopPropagation === "function") {
            e.stopPropagation();
        }
        e.cancelBubble = true;

        if (typeof e.preventDefault === "function") {
            e.preventDefault();
        }
        e.returnValue = false;
    }
};

makePublisher(keys);
makePublisher(ransom);

keys.on('textwrite', count.countDown, count);
keys.on('textdelete', count.countUp, count);
keys.on('copypast', count.length, count);
ransom.on('reset', count.reset, count);
ransom.on('value', writeRansom.writeMessage, writeRansom);

window.onkeypress = keys.handleKeypress;
window.onkeydown = keys.handleKeydown;

Array.prototype.shuffle = function () {
    return this.sort(function () { return 0.5 - Math.random(); });
}

Array.prototype.clone = function() {
    return this.slice(0);
}

function get(id) {
    return document.getElementById(id);
}

function viewWidth() {
    return window.innerWidth;
}

var el = get('sendButton');

if (document.addEventListener) { // W3C
    el.addEventListener('click', ransom.getValue, false);
} else if (document.attachEvent) { // IE
    el.attachEvent('click', ransom.getValue);
} else { // last resort
    el.onclick = ransom.getValue;
}

var fresh = get('fresh');

if (document.addEventListener) { // W3C
    fresh.addEventListener('click', writeRansom.writeMessage, false);
} else if (document.attachEvent) { // IE
    fresh.attachEvent('click', writeRansom.writeMessage);
} else { // last resort
    fresh.onclick = writeRansom.writeMessage;
}

var boom = get('boom');

if (document.addEventListener) { // W3C
    boom.addEventListener('click', mix.rotate, false);
} else if (document.attachEvent) { // IE
    boom.attachEvent('click', mix.rotate);
} else { // last resort
    boom.onclick = mix.rotate;
}