class XYZINE {
  constructor() {
    this.op = [];
    this.val = [];
    this.expf = [];
    this.bfreq = [];
    this.rnds = ((BigInt(Date.now())^BigInt(Math.floor(Math.random()*0xFFFFFFFF)))&0xFFFFFFFFn)|7012135492040785920n;
  }

  rng(s=0n) {
    s = s|7012135492040785920n;
    return () => {
      s = (s*6364136223846793005n+1442695040888963407n)&18446744073709551615n;
      const x = Number(((s>>18n)^s)>>27n)>>>0;
      const r = Number(s>>59n);
      return ((x>>>r)|(x<<((32-r)&31)))>>>0;
    }
  }
  
  srnd(s) {
    this.rnds = (((s!=undefined&&s!=null)?BigInt(s):BigInt(Date.now())^BigInt(Math.floor(Math.random()*0xFFFFFFFF)))&0xFFFFFFFFn)|7012135492040785920n;
  }

  rnd(m) {
    this.rnds = (this.rnds*6364136223846793005n+1442695040888963407n)&18446744073709551615n;
    const x = Number(((this.rnds>>18n)^this.rnds)>>27n)>>>0;
    const r = Number(this.rnds>>59n);
    const o = (((x>>>r)|(x<<((32-r)&31)))>>>0)/0x100000000;
    if (Array.isArray(m)) {
      return m[o*m.length|0];
    } else {
      return o*(m||1);
    }
  }

  get_op() {
    if (this.op.length == 0) {
      this.op = ["+","+","-","*","/","^","^","&","|","%"];
    }
    return this.del(this.op,this.rnd(this.op));
  }

  get_val() {
    if (this.val.length == 0) {
      this.val = [
        "(x-px)","(y-py)",
        "Math.abs(x)","Math.abs(y)",
        "x","y","x","y",
        "3",
        Math.floor(1+this.rnd()* 4),
        Math.floor(1+this.rnd()* 8),
        Math.floor(1+this.rnd()*16),
        Math.floor(1+this.rnd()*64)
      ];
      const freq = 12;
      if (this.rnd()<1/freq) this.val.push("Math.floor(Math.sqrt(x*x+y*y))");
      if (this.rnd()<1/freq) this.val.push("(x*x+y*y)");
      if (this.rnd()<1/freq) this.val.push("Math.floor(Math.sqrt((x-px)^2+(y-py)^2))");
      if (this.rnd()<1/freq) this.val.push("Math.max(Math.abs(x),Math.abs(y))");
      if (this.rnd()<1/freq) this.val.push("Math.min(Math.abs(x),Math.abs(y))");
      if (this.rnd()<1/freq) this.val.push("(Math.abs(x)+Math.abs(y))");
      if (this.rnd()<1/freq) this.val.push("(Math.max(Math.abs(x),Math.abs(y))+Math.min(Math.abs(x),Math.abs(y)))/2");
      if (this.rnd()<1/freq) this.val.push("(x&y)");
      if (this.rnd()<1/freq) this.val.push("(x|y)");
      if (this.rnd()<1/freq) this.val.push("((x*x)>>7)");
      if (this.rnd()<1/freq) this.val.push("((y*y)>>7)");
      if (this.rnd()<1/freq) this.val.push("Math.sign(x)");
      if (this.rnd()<1/freq) this.val.push("Math.sign(y)");
    }
    return this.del(this.val,this.rnd(this.val));
  }

  exp_a_op_b(a,b) {
    const op = this.get_op();
    if (this.safe && (op === "/" || op === "%")) {
      return `((${b}!=0)?(${a}${op}${b}):0)`;
    }
    return `(${a}${op}${b})`;
  }

  exp_max(a,b) {
    return `Math.max(${a},${b})`;
  }

  exp_min(a,b) {
    return `Math.min(${a},${b})`;
  }

  exp_cos(a,b) {
    return `Math.floor(Math.cos(${a}/${b})*${this.get_val()})`;
  }

  exp_atan(a,b) {
    return `Math.floor(Math.atan2(${a},${b})*${this.get_val()})`;
  }

  exp(depth) {
    if (this.bfreq.length == 0) this.bfreq = [1,2,2,3];
    if (depth>this.del(this.bfreq,this.rnd(this.bfreq))) {
      return this.get_val();
    }
    const a = this.exp(depth+1);
    const b = this.exp(depth+1);
    if (this.expf.length == 0) {
      this.expf = [
        this.exp_a_op_b.bind(this),
        this.exp_a_op_b.bind(this),
        this.exp_a_op_b.bind(this),
        this.exp_a_op_b.bind(this),
        this.exp_max.bind(this),
        this.exp_min.bind(this),
        this.exp_cos.bind(this),
        this.exp_atan.bind(this)
      ];
    }
    const ff = this.del(this.expf, this.rnd(this.expf));
    return `(${ff(a,b)})`;
  }

  getx(d,s=0) {
    this.op = [];
    this.val = [];
    this.expf = [];
    this.bfreq = [];
    this.safe = s;
    return this.exp(d);
  }

  del(arr,value) {
    const idx = arr.indexOf(value);
    if (idx!=-1) {
      arr.splice(idx,1);
    }
    return value;
  }
}
