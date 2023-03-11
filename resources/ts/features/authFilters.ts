
const checkPassword = (password: string): boolean => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);

const isValidEmail = (email: string): boolean => {
	// Паттерн для проверки адреса электронной почты
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	// Известные домены
	const knownDomains = [
		"gmail.com",
		"bk.ru",
		"mail.ru",
		"yandex.ru",
		"list.ru",
		"inbox.ru",
		"internet.ru",
		"ya.ru",
		"yandex.by",
		"yandex.com",
		"yandex.kz",
	];
	// Разбиваем адрес электронной почты на имя пользователя и домен
	const [user, domain] = email.split("@");
	// Проверяем, соответствует ли строка паттерну и является ли домен известным
	return emailPattern.test(email) && knownDomains.includes(domain);
};

export {
	isValidEmail,
	checkPassword
}
