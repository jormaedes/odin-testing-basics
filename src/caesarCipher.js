export default function caesarCipher(str, n){
	const alphaLow = 'abcdefghijklmnopqrstuvwxyz';
	const alphaUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	if (n == 0) return str;
	let res = '';
	for(let i = 0; i < str.length; i++){
		let l = alphaLow.indexOf(str[i]);
		if (l != -1)
		{
			res += alphaLow.charAt((l + n)% 26);
			continue ;
		}
		let u = alphaUp.indexOf(str[i]);
		if (u != -1)
		{
			res += alphaUp.charAt((u + n) % 26);
			continue ;
		}
		res += str[i];
	}
	return res;
}
