function toVal(m) {
  let y,s = '';

  if (typeof m === 'string' || typeof m === 'number') (s += m);
  if (typeof m === 'object') {
    if (Array.isArray(m)) {
      m.forEach(y => y && typeof y !== 'boolean' && (s && (s += ' '), s += toVal(y)))
    } else {
      for (y in m) {
        m[y] && (s && (s += ' '), s += y);
      }
    }
  }

  return s;
}

export function classCombine() {
  let t,x,s='';
  for (t of arguments) {
    t && (x = toVal(t)) && (s && (s += ' '), s += x);
  }

  return s;
}

export default classCombine;