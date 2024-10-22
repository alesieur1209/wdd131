const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]



function bookTemplate(book){
	
	return`
	<div class="bookEntry">
            <div class="bookInfo">
                <ul>
                    <li>${book.date}</li>
                    <li>${book.ages}</li>
                    <li>${book.genre}</li>
                    <li>${book.stars}</li>
                </ul>
            </div>

            <div class="bookCover">
                <h2>${book.title}</h2>
                <div class=image><img src=${book.imgSrc} alt=${book.imgAlt}></div>
                <p>${book.description}</p>
            </div>
        </div>
	`
}


