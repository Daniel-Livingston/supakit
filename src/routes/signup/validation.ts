export function isValidEmail(email: string): boolean {
	return !!email.match(/.*@.+\..+/);
}

export function isValidPassword(password: string) {
	return !!password.match(/.{8,}/);
}
