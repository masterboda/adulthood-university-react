const videos = {
	path: `${process.env.PUBLIC_URL}/videos`,
	items: [
		{
			name: 'Марта Катериняк',
			note: 'Голова',
			filename: 'proffessor-kateryniak.MOV',
			extension: 'mov',
			options: {
				height: '100%',
				top: 0,
				left: '-45px'
			}
		},
		{
			name: 'Рустамджиніус Джуракулов',
			note: 'Лектор з автостопингу і кайфульного життя',
			filename: 'proffessor-rustamgin.mp4',
			extension: 'mp4',
			options: {
				height: '100%',
				left: '-50px'
			}
		},
		{
			name: 'Олександра Луцак',
			note: 'Доктор наук з щастя',
			filename: 'proffessor-lutsak.mp4',
			extension: 'mp4',
			options: {
				width: '100%',
				top: 0
			}
		},
		{
			name: 'Катруся Лаврик',
			note: 'Професор із несподіванок',
			filename: 'proffessor-lavryk.mp4',
			extension: 'mp4',
			options: {
				width: '100%',
				top: '-60px'
			}
		},
		{
			name: 'Тетяна Козачанська',
			note: 'Доцент кафедри зі споживання "Domino\'s Pizza"',
			filename: 'proffessor-kozachanska.mp4',
			extension: 'mp4',
			options: {
				width: '105%',
				top: '-20px',

			}
		},
		{
			name: 'Дарія Кінаш',
			note: 'Професор з виживання',
			filename: 'proffessor-kinash.MOV',
			extension: 'mov',
			options: {
				height: '100%',
				left: '-40px'
			}
		},
	]
};

export default videos;