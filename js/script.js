const xyz_font_buffer = [0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0];

const xyz_h2r = (h) => {
  const n = parseInt(h.slice(1), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

const xyz_l = (a, b, t) => {
  return Math.round(a + (b - a) * t);
}

const xyz_grad = (v, p = s) => {
  v = Math.min(1, Math.max(0, v));
  const i = Math.min(Math.floor(v * (p.length - 1)), p.length - 2);
  const t = v * (p.length - 1) - i;
  const c1 = xyz_h2r(p[i]);
  const c2 = xyz_h2r(p[i + 1]);
  return [xyz_l(c1.r, c2.r, t), xyz_l(c1.g, c2.g, t), xyz_l(c1.b, c2.b, t)];
}

const palette = [
  [0x1d, 0x18, 0x26],
  [0x8b, 0x7f, 0xb0],
  [0xc3, 0xbe, 0xe5],
  [0xff, 0xe8, 0xe9],
  [0x65, 0x26, 0x4e],
  [0xa0, 0x1a, 0x3d],
  [0xde, 0x1b, 0x45],
  [0xf2, 0x63, 0x7b],
  [0x8b, 0x3f, 0x39],
  [0xbb, 0x45, 0x31],
  [0xef, 0x5d, 0x0e],
  [0xff, 0x95, 0x00],
  [0x00, 0xa0, 0x3d],
  [0x12, 0xd5, 0x00],
  [0xb4, 0xd8, 0x00],
  [0xff, 0xc3, 0x1f],
  [0x00, 0x6e, 0x69],
  [0x00, 0xae, 0x85],
  [0x00, 0xda, 0xa7],
  [0x4f, 0xd6, 0xff],
  [0x2b, 0x27, 0x54],
  [0x3c, 0x51, 0xaf],
  [0x18, 0x88, 0xde],
  [0x00, 0xa9, 0xe1],
  [0x59, 0x3c, 0x97],
  [0x89, 0x44, 0xcf],
  [0xb4, 0x4a, 0xff],
  [0xe9, 0x59, 0xff],
  [0xe7, 0x87, 0x6d],
  [0xff, 0xba, 0x8c],
  [0xff, 0xef, 0x5c],
  [0xff, 0x9c, 0xde]
];
/*[
  0, 20, 4, 5, 6, 10, 11, 15, 14, 13, 17, 18, 19, 23, 22, 21, 20, 0, 24, 25,
  26, 27, 31, 3, 2, 1, 20
].map(
  (i) => "#" + palette[i].map((x) => x.toString(16).padStart(2, "0")).join("")
);*/

const palette2 = palette.map(
  (i) => "#" + i.map((x) => x.toString(16).padStart(2, "0")).join("")
);

/*const palette_bw = [0,20,1,2,3].map(
  (i) => "#" + palette[i].map((x) => x.toString(16).padStart(2, "0")).join("")
);*/

const palette_fa = [
  "#1d1826",
  "#2b2754",
  "#65264e",
  "#a01a3d",
  "#de1b45",
  "#ef5d0e",
  "#ff9500",
  "#ffc31f",
  "#b4d800",
  "#12d500",
  "#00ae85",
  "#00daa7",
  "#4fd6ff",
  "#00a9e1",
  "#1888de",
  "#3c51af",
  "#2b2754",
  "#1d1826",
  "#593c97",
  "#8944cf",
  "#b44aff",
  "#e959ff",
  "#ff9cde",
  "#ffe8e9",
  "#c3bee5",
  "#8b7fb0",
  "#2b2754"
];

const xyz_prints = (data,width,height,t,x,y,c,s = 1) => {
  x |= 0;
  y |= 0;
  s |= 0;
  if (s < 1) s = 1;
  t = t == null ? "" : t.toString();
  const pal = palette[c&31];
  const rVal = pal[0];
  const gVal = pal[1];
  const bVal = pal[2];
  const lines = t.split("\n");
  for (let l = 0; l < lines.length; l++) {
    const line = lines[l];
    const cy = y + l * 5 * s;
    for (let i = 0; i < line.length; i++) {
      const code = line.charCodeAt(i);
      const cx = x + i * 4 * s;
      if (code < 32) continue;
      for (let j = 0; j < 5; j++) {
        for (let k = 0; k < 4; k++) {
          const fontIndex = (code - 32) * 4 + j * 380 + k;
          if (xyz_font_buffer[fontIndex] == 1) {
            for (let sy = 0; sy < s; sy++) {
              for (let sx = 0; sx < s; sx++) {
                const px = cx + k * s + sx;
                const py = cy + j * s + sy;
                if (px < 0 || py < 0 || px >= width || py >= height) continue;
                const idx = (py * width + px) * 4;
                data[idx] = rVal;
                data[idx + 1] = gVal;
                data[idx + 2] = bVal;
                data[idx + 3] = 255;
              }
            }
          }
        }
      }
    }
  }
}

const w = 256;
const h = 256;
const w2 = w/2;
const h2 = h/2;
const wxh = w*h;

const canvas = document.createElement("canvas");
canvas.width = w;
canvas.height = h;
const ctx = canvas.getContext("2d");

const img = ctx.createImageData(w,h);
const img_data = img.data;
for (let n=0;n<wxh;n++) {
  img_data[(n<<2)+3] = 255;
}

const zn = new XYZINE();
const vs = new Float32Array(wxh);

let f;

let render = (i,mn) => {
  ctx.clearRect(0,0,w,h);

  zn.srnd(i);
  const st =  zn.rnd(palette_fa.length  )|0;
  /*const minp = 4;
  const maxp = 8;
  const se = Math.floor(minp+(maxp-minp)*Math.sqrt(zn.rnd(1)));*/
  const pal = palette_fa.slice(st).concat(palette_fa.slice(0,st));
  /*const pal = [];
  const copy = palette_fa.slice();
  for (let i=0;i<4&&copy.length>0;i++) {
    const e = zn.rnd(copy);
    zn.del(copy,e);
    pal.push(e);
  }*/
  zn.srnd(i);
  const expr = zn.getx(0,1);

  try {
    f = new Function("x","y","px","py",`return ${expr};`);
    f(0,0,0,0);
  } catch(e) {
    return;
  }
  
  let min = Infinity;
  let max = -Infinity;
  for (let i=0;i<w;i++) {
    const xi = i-w2-0.5;
    for (let j=0;j<h;j++) {
      const yi = j-h2-0.5;
      const v = f(xi,yi,0,0);
      vs[i+j*w] = v;
      if (v<min) min = v;
      if (v>max) max = v;
    }
  }
  for (let n=0;n<wxh;n++) {
    let [r,g,b] = xyz_grad((vs[n]-min)/(max-min)||0,pal);
    if (!(i<mn)) {
      r = g = b = 0.299*r+0.587*g+0.114*b;
      b = b+b*(255-b)/255/2;
    }
    const n4 = n<<2;
    img_data[n4  ] = r;
    img_data[n4+1] = g;
    img_data[n4+2] = b;
    //img_data[n4+3] = 255;
  }
  const txt = i.toString();
  const txtl = txt.length;
  let sc = 5;
  if (txtl>4) sc=Math.max(9-txtl,2);
  const ps = [
    [-sc,-sc],
    [  0,-sc],
    [ sc,-sc],
    [-sc,  0],
    [ sc,  0],
    [-sc, sc],
    [  0, sc],
    [ sc, sc]
  ];
  ps.slice().reverse().forEach(([dx1,dy1],i1) => {
    ps.forEach(([dx2,dy2],i2) => {
      xyz_prints(img_data,w,h,txt,w2+sc/2-2*sc*txtl+dx1+dx2,h2-2*sc+dy1+dy2,i1>4?3:2,sc);
    });
  });
  ps.forEach(([dx,dy],i) => {
    xyz_prints(img_data,w,h,txt,w2+sc/2-2*sc*txtl+dx,h2-2*sc+dy,i<3?20:0,sc);
  });
  xyz_prints(img_data,w,h,txt,w2+sc/2-2*sc*txtl,h2-2*sc,3,sc);
  ctx.putImageData(img,0,0);
  return canvas.toDataURL("image/png");
}
