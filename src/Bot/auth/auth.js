export async function selectMenu(bot, slot, qslot = 0) {
	bot.setQuickBarSlot(qslot);
	bot.activateItem(false);
	bot.once('windowOpen', (window) => {
		bot.clickWindow(slot, 0, 0);
	});
}
export function botAuth(bot, messagestr) {
	if (messagestr.includes('/reg')) {
		bot.chat('/register mysecurepassword mysecurepassword');
	} else if (messagestr.includes('/l')) {
		bot.chat('/login mysecurepassword');
	} else if (messagestr.includes('Вы авторизировались в аккаунте.')) {

		setTimeout(() => selectMenu(bot, 29), 1500);
	}
}





// bot._client.on('resource_pack_send', (data) => {
// 	const { url, hash } = data;
// 	bot.emit('resourcepack', { url, hash });
// });

// const TEXTURE_PACK_RESULTS = {
// 	SUCCESSFULLY_LOADED: 0,
// 	DECLINED: 1,
// 	FAILED_DOWNLOAD: 2,
// 	ACCEPTED: 3
// };

// const acceptPack = () => {
// 	bot._client.write('resource_pack_receive', {
// 		result: TEXTURE_PACK_RESULTS.ACCEPTED
// 	});
// 	bot._client.write('resource_pack_receive', {
// 		result: TEXTURE_PACK_RESULTS.SUCCESSFULLY_LOADED
// 	});
// };

// const denyPack = () => {
// 	bot._client.write('resource_pack_receive', {
// 		result: TEXTURE_PACK_RESULTS.DECLINED
// 	});
// };
// bot.on('resourcepack', () => acceptPack());












// var count = 0;
// bot._client.on('map', ({ data }) => {
// 	if (!data) return;

// 	const size = Math.sqrt(data.length);
// 	const image = createImage(size, size);

// 	for (let x = 0; x < size; x++) {
// 		for (let z = 0; z < size; z++) {
// 			const colorId = data[x + (z * size)];
// 			image.setAt(x, z, getColor(colorId));
// 		}
// 	}
// 	count++;
// 	const imagePath = `${__dirname}/auth/A_${count}.png`;
// 	image.writeImage(imagePath, function (err) {
// 		if (err) throw err;

// 		console.log(`Изображение капчи сохранено в: ${imagePath}`);
// 	});
// 	bot.on('spawn', function () {
// 		console.log("[DEBUG] Бот успешно подключён к серверу!");
// 	});
// });
// function getColor(colorId) {
// 	const colors = [
// 		{ red: 0, green: 0, blue: 0, alpha: 255 },
// 		{ red: 89, green: 125, blue: 39, alpha: 255 },
// 		{ red: 109, green: 153, blue: 48, alpha: 255 },
// 		{ red: 127, green: 178, blue: 56, alpha: 255 },
// 		{ red: 67, green: 94, blue: 29, alpha: 255 },
// 		{ red: 174, green: 164, blue: 115, alpha: 255 },
// 		{ red: 213, green: 201, blue: 140, alpha: 255 },
// 		{ red: 247, green: 233, blue: 163, alpha: 255 },
// 		{ red: 130, green: 123, blue: 86, alpha: 255 },
// 		{ red: 140, green: 140, blue: 140, alpha: 255 },
// 		{ red: 171, green: 171, blue: 171, alpha: 255 },
// 		{ red: 199, green: 199, blue: 199, alpha: 255 },
// 		{ red: 105, green: 105, blue: 105, alpha: 255 },
// 		{ red: 180, green: 0, blue: 0, alpha: 255 },
// 		{ red: 220, green: 0, blue: 0, alpha: 255 },
// 		{ red: 255, green: 0, blue: 0, alpha: 255 },
// 		{ red: 135, green: 0, blue: 0, alpha: 255 },
// 		{ red: 112, green: 112, blue: 180, alpha: 255 },
// 		{ red: 138, green: 138, blue: 220, alpha: 255 },
// 		{ red: 160, green: 160, blue: 255, alpha: 255 },
// 		{ red: 84, green: 84, blue: 135, alpha: 255 },
// 		{ red: 117, green: 117, blue: 117, alpha: 255 },
// 		{ red: 144, green: 144, blue: 144, alpha: 255 },
// 		{ red: 167, green: 167, blue: 167, alpha: 255 },
// 		{ red: 88, green: 88, blue: 88, alpha: 255 },
// 		{ red: 0, green: 87, blue: 0, alpha: 255 },
// 		{ red: 0, green: 106, blue: 0, alpha: 255 },
// 		{ red: 0, green: 124, blue: 0, alpha: 255 },
// 		{ red: 0, green: 65, blue: 0, alpha: 255 },
// 		{ red: 180, green: 180, blue: 180, alpha: 255 },
// 		{ red: 220, green: 220, blue: 220, alpha: 255 },
// 		{ red: 255, green: 255, blue: 255, alpha: 255 },
// 		{ red: 135, green: 135, blue: 135, alpha: 255 },
// 		{ red: 115, green: 118, blue: 129, alpha: 255 },
// 		{ red: 141, green: 144, blue: 158, alpha: 255 },
// 		{ red: 164, green: 168, blue: 184, alpha: 255 },
// 		{ red: 86, green: 88, blue: 97, alpha: 255 },
// 		{ red: 106, green: 76, blue: 54, alpha: 255 },
// 		{ red: 130, green: 94, blue: 66, alpha: 255 },
// 		{ red: 151, green: 109, blue: 77, alpha: 255 },
// 		{ red: 79, green: 57, blue: 40, alpha: 255 },
// 		{ red: 79, green: 79, blue: 79, alpha: 255 },
// 		{ red: 96, green: 96, blue: 96, alpha: 255 },
// 		{ red: 112, green: 112, blue: 112, alpha: 255 },
// 		{ red: 59, green: 59, blue: 59, alpha: 255 },
// 		{ red: 45, green: 45, blue: 180, alpha: 255 },
// 		{ red: 55, green: 55, blue: 220, alpha: 255 },
// 		{ red: 64, green: 64, blue: 255, alpha: 255 },
// 		{ red: 33, green: 33, blue: 135, alpha: 255 },
// 		{ red: 100, green: 84, blue: 50, alpha: 255 },
// 		{ red: 123, green: 102, blue: 62, alpha: 255 },
// 		{ red: 143, green: 119, blue: 72, alpha: 255 },
// 		{ red: 75, green: 63, blue: 38, alpha: 255 },
// 		{ red: 180, green: 177, blue: 172, alpha: 255 },
// 		{ red: 220, green: 217, blue: 211, alpha: 255 },
// 		{ red: 255, green: 252, blue: 245, alpha: 255 },
// 		{ red: 135, green: 133, blue: 129, alpha: 255 },
// 		{ red: 152, green: 89, blue: 36, alpha: 255 },
// 		{ red: 186, green: 109, blue: 44, alpha: 255 },
// 		{ red: 216, green: 127, blue: 51, alpha: 255 },
// 		{ red: 114, green: 67, blue: 27, alpha: 255 },
// 		{ red: 125, green: 53, blue: 152, alpha: 255 },
// 		{ red: 153, green: 65, blue: 186, alpha: 255 },
// 		{ red: 178, green: 76, blue: 216, alpha: 255 },
// 		{ red: 94, green: 40, blue: 114, alpha: 255 },
// 		{ red: 72, green: 108, blue: 152, alpha: 255 },
// 		{ red: 88, green: 132, blue: 186, alpha: 255 },
// 		{ red: 102, green: 153, blue: 216, alpha: 255 },
// 		{ red: 54, green: 81, blue: 114, alpha: 255 },
// 		{ red: 161, green: 161, blue: 36, alpha: 255 },
// 		{ red: 197, green: 197, blue: 44, alpha: 255 },
// 		{ red: 229, green: 229, blue: 51, alpha: 255 },
// 		{ red: 121, green: 121, blue: 27, alpha: 255 },
// 		{ red: 89, green: 144, blue: 17, alpha: 255 },
// 		{ red: 109, green: 176, blue: 21, alpha: 255 },
// 		{ red: 127, green: 204, blue: 25, alpha: 255 },
// 		{ red: 67, green: 108, blue: 13, alpha: 255 },
// 		{ red: 170, green: 89, blue: 116, alpha: 255 },
// 		{ red: 208, green: 109, blue: 142, alpha: 255 },
// 		{ red: 242, green: 127, blue: 165, alpha: 255 },
// 		{ red: 128, green: 67, blue: 87, alpha: 255 },
// 		{ red: 53, green: 53, blue: 53, alpha: 255 },
// 		{ red: 65, green: 65, blue: 65, alpha: 255 },
// 		{ red: 76, green: 76, blue: 76, alpha: 255 },
// 		{ red: 40, green: 40, blue: 40, alpha: 255 },
// 		{ red: 108, green: 108, blue: 108, alpha: 255 },
// 		{ red: 132, green: 132, blue: 132, alpha: 255 },
// 		{ red: 153, green: 153, blue: 153, alpha: 255 },
// 		{ red: 81, green: 81, blue: 81, alpha: 255 },
// 		{ red: 53, green: 89, blue: 108, alpha: 255 },
// 		{ red: 65, green: 109, blue: 132, alpha: 255 },
// 		{ red: 76, green: 127, blue: 153, alpha: 255 },
// 		{ red: 40, green: 67, blue: 81, alpha: 255 },
// 		{ red: 89, green: 44, blue: 125, alpha: 255 },
// 		{ red: 109, green: 54, blue: 153, alpha: 255 },
// 		{ red: 127, green: 63, blue: 178, alpha: 255 },
// 		{ red: 67, green: 33, blue: 94, alpha: 255 },
// 		{ red: 36, green: 53, blue: 125, alpha: 255 },
// 		{ red: 44, green: 65, blue: 153, alpha: 255 },
// 		{ red: 51, green: 76, blue: 178, alpha: 255 },
// 		{ red: 27, green: 40, blue: 94, alpha: 255 },
// 		{ red: 72, green: 53, blue: 36, alpha: 255 },
// 		{ red: 88, green: 65, blue: 44, alpha: 255 },
// 		{ red: 102, green: 76, blue: 51, alpha: 255 },
// 		{ red: 54, green: 40, blue: 27, alpha: 255 },
// 		{ red: 72, green: 89, blue: 36, alpha: 255 },
// 		{ red: 88, green: 109, blue: 44, alpha: 255 },
// 		{ red: 102, green: 127, blue: 51, alpha: 255 },
// 		{ red: 54, green: 67, blue: 27, alpha: 255 },
// 		{ red: 108, green: 36, blue: 36, alpha: 255 },
// 		{ red: 132, green: 44, blue: 44, alpha: 255 },
// 		{ red: 153, green: 51, blue: 51, alpha: 255 },
// 		{ red: 81, green: 27, blue: 27, alpha: 255 },
// 		{ red: 17, green: 17, blue: 17, alpha: 255 },
// 		{ red: 21, green: 21, blue: 21, alpha: 255 },
// 		{ red: 25, green: 25, blue: 25, alpha: 255 },
// 		{ red: 13, green: 13, blue: 13, alpha: 255 },
// 		{ red: 176, green: 168, blue: 54, alpha: 255 },
// 		{ red: 215, green: 205, blue: 66, alpha: 255 },
// 		{ red: 250, green: 238, blue: 77, alpha: 255 },
// 		{ red: 132, green: 126, blue: 40, alpha: 255 },
// 		{ red: 64, green: 154, blue: 150, alpha: 255 },
// 		{ red: 79, green: 188, blue: 183, alpha: 255 },
// 		{ red: 92, green: 219, blue: 213, alpha: 255 },
// 		{ red: 48, green: 115, blue: 112, alpha: 255 },
// 		{ red: 52, green: 90, blue: 180, alpha: 255 },
// 		{ red: 63, green: 110, blue: 220, alpha: 255 },
// 		{ red: 74, green: 128, blue: 255, alpha: 255 },
// 		{ red: 39, green: 67, blue: 135, alpha: 255 },
// 		{ red: 0, green: 153, blue: 40, alpha: 255 },
// 		{ red: 0, green: 187, blue: 50, alpha: 255 },
// 		{ red: 0, green: 217, blue: 58, alpha: 255 },
// 		{ red: 0, green: 114, blue: 30, alpha: 255 },
// 		{ red: 91, green: 60, blue: 34, alpha: 255 },
// 		{ red: 111, green: 74, blue: 42, alpha: 255 },
// 		{ red: 129, green: 86, blue: 49, alpha: 255 },
// 		{ red: 68, green: 45, blue: 25, alpha: 255 },
// 		{ red: 79, green: 1, blue: 0, alpha: 255 },
// 		{ red: 96, green: 1, blue: 0, alpha: 255 },
// 		{ red: 112, green: 2, blue: 0, alpha: 255 },
// 		{ red: 59, green: 1, blue: 0, alpha: 255 },
// 		{ red: 147, green: 124, blue: 113, alpha: 255 },
// 		{ red: 180, green: 152, blue: 138, alpha: 255 },
// 		{ red: 209, green: 177, blue: 161, alpha: 255 },
// 		{ red: 110, green: 93, blue: 85, alpha: 255 },
// 		{ red: 112, green: 57, blue: 25, alpha: 255 },
// 		{ red: 137, green: 70, blue: 31, alpha: 255 },
// 		{ red: 159, green: 82, blue: 36, alpha: 255 },
// 		{ red: 84, green: 43, blue: 19, alpha: 255 },
// 		{ red: 105, green: 61, blue: 76, alpha: 255 },
// 		{ red: 128, green: 75, blue: 93, alpha: 255 },
// 		{ red: 149, green: 87, blue: 108, alpha: 255 },
// 		{ red: 78, green: 46, blue: 57, alpha: 255 },
// 		{ red: 79, green: 76, blue: 97, alpha: 255 },
// 		{ red: 96, green: 93, blue: 119, alpha: 255 },
// 		{ red: 112, green: 108, blue: 138, alpha: 255 },
// 		{ red: 59, green: 57, blue: 73, alpha: 255 },
// 		{ red: 131, green: 93, blue: 25, alpha: 255 },
// 		{ red: 160, green: 114, blue: 31, alpha: 255 },
// 		{ red: 186, green: 133, blue: 36, alpha: 255 },
// 		{ red: 98, green: 70, blue: 19, alpha: 255 },
// 		{ red: 72, green: 82, blue: 37, alpha: 255 },
// 		{ red: 88, green: 100, blue: 45, alpha: 255 },
// 		{ red: 103, green: 117, blue: 53, alpha: 255 },
// 		{ red: 54, green: 61, blue: 28, alpha: 255 },
// 		{ red: 112, green: 54, blue: 55, alpha: 255 },
// 		{ red: 138, green: 66, blue: 67, alpha: 255 },
// 		{ red: 160, green: 77, blue: 78, alpha: 255 },
// 		{ red: 84, green: 40, blue: 41, alpha: 255 },
// 		{ red: 40, green: 28, blue: 24, alpha: 255 },
// 		{ red: 49, green: 35, blue: 30, alpha: 255 },
// 		{ red: 57, green: 41, blue: 35, alpha: 255 },
// 		{ red: 30, green: 21, blue: 18, alpha: 255 },
// 		{ red: 95, green: 75, blue: 69, alpha: 255 },
// 		{ red: 116, green: 92, blue: 84, alpha: 255 },
// 		{ red: 135, green: 107, blue: 98, alpha: 255 },
// 		{ red: 71, green: 56, blue: 51, alpha: 255 },
// 		{ red: 61, green: 64, blue: 64, alpha: 255 },
// 		{ red: 75, green: 79, blue: 79, alpha: 255 },
// 		{ red: 87, green: 92, blue: 92, alpha: 255 },
// 		{ red: 46, green: 48, blue: 48, alpha: 255 },
// 		{ red: 86, green: 51, blue: 62, alpha: 255 },
// 		{ red: 105, green: 62, blue: 75, alpha: 255 },
// 		{ red: 122, green: 73, blue: 88, alpha: 255 },
// 		{ red: 64, green: 38, blue: 46, alpha: 255 },
// 		{ red: 53, green: 43, blue: 64, alpha: 255 },
// 		{ red: 65, green: 53, blue: 79, alpha: 255 },
// 		{ red: 76, green: 62, blue: 92, alpha: 255 },
// 		{ red: 40, green: 32, blue: 48, alpha: 255 },
// 		{ red: 53, green: 35, blue: 24, alpha: 255 },
// 		{ red: 65, green: 43, blue: 30, alpha: 255 },
// 		{ red: 76, green: 50, blue: 35, alpha: 255 },
// 		{ red: 40, green: 26, blue: 18, alpha: 255 },
// 		{ red: 53, green: 57, blue: 29, alpha: 255 },
// 		{ red: 65, green: 70, blue: 36, alpha: 255 },
// 		{ red: 76, green: 82, blue: 42, alpha: 255 },
// 		{ red: 40, green: 43, blue: 22, alpha: 255 }
// 	];

// 	colorId -= 3;

// 	if (!colors[colorId]) return { red: 255, green: 255, blue: 255, alpha: 255 };
// 	else return colors[colorId];
// }