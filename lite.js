export function clsx() {
	let i=0, t, s='';
	
  for (t of arguments) {
    t && (typeof t === 'string') && (s += (s && ' ') + t);
  };

	return s;
}

export default clsx;
