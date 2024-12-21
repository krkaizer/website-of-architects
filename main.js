function onLoad() {
    let currPage = 0;
    const images = [
        //первая страница
        {
            src: "img/image1.png",
            description: "Описание или пояснение к изображению 1."
        },
        {
            src: "img/image2.png",
            description: "Описание или пояснение к изображению 2."
        },
        {
            src: "img/image3.png",
            description: "Описание или пояснение к изображению 3."
        },
        {
            src: "img/image4.png",
            description: "Описание или пояснение к изображению 4."
        },
        {
            src: "img/image5.png",
            description: "Описание или пояснение к изображению 5."
        },
        {
            src: "img/image6.png",
            description: "Описание или пояснение к изображению 6."
        },
        {
            src: "img/image7.png",
            description: "Описание или пояснение к изображению 7."
        },
        {
            src: "img/image8.png",
            description: "Описание или пояснение к изображению 8."
        },
        {
            src: "img/image9.png",
            description: "Описание или пояснение к изображению 9."
        },
        {
            src: "img/image10.png",
            description: "Описание или пояснение к изображению 10."
        },
        //вторая
        {
            src: "img/image2.png",
            description: "Описание или пояснение к изображению 11."
        },
        {
            src: "img/image3.png",
            description: "Описание или пояснение к изображению 12."
        },
        {
            src: "img/image4.png",
            description: "Описание или пояснение к изображению 13."
        },
        {
            src: "img/image5.png",
            description: "Описание или пояснение к изображению 14."
        },
        {
            src: "img/image6.png",
            description: "Описание или пояснение к изображению 15."
        },
        {
            src: "img/image7.png",
            description: "Описание или пояснение к изображению 16."
        },
        {
            src: "img/image8.png",
            description: "Описание или пояснение к изображению 17."
        },
        {
            src: "img/image9.png",
            description: "Описание или пояснение к изображению 18."
        },
        {
            src: "img/image10.png",
            description: "Описание или пояснение к изображению 19."
        },
        {
            src: "img/image1.png",
            description: "Описание или пояснение к изображению 20."
        },
        //третья
        {
            src: "img/image3.png",
            description: "Описание или пояснение к изображению 21."
        },
        {
            src: "img/image4.png",
            description: "Описание или пояснение к изображению 22."
        },
        {
            src: "img/image5.png",
            description: "Описание или пояснение к изображению 23."
        },
        {
            src: "img/image6.png",
            description: "Описание или пояснение к изображению 24."
        },
        {
            src: "img/image7.png",
            description: "Описание или пояснение к изображению 25."
        },
        {
            src: "img/image8.png",
            description: "Описание или пояснение к изображению 26."
        },
        {
            src: "img/image9.png",
            description: "Описание или пояснение к изображению 27."
        },
        {
            src: "img/image10.png",
            description: "Описание или пояснение к изображению 28."
        },
        {
            src: "img/image1.png",
            description: "Описание или пояснение к изображению 29."
        },
        {
            src: "img/image2.png",
            description: "Описание или пояснение к изображению 30."
        },
        //четвёртая
        {
            src: "img/image4.png",
            description: "Описание или пояснение к изображению 31."
        },
        {
            src: "img/image5.png",
            description: "Описание или пояснение к изображению 32."
        },
        {
            src: "img/image6.png",
            description: "Описание или пояснение к изображению 33."
        },
        {
            src: "img/image7.png",
            description: "Описание или пояснение к изображению 34."
        },
        {
            src: "img/image8.png",
            description: "Описание или пояснение к изображению 35."
        },
        {
            src: "img/image9.png",
            description: "Описание или пояснение к изображению 36."
        },
        {
            src: "img/image10.png",
            description: "Описание или пояснение к изображению 37."
        },
        {
            src: "img/image1.png",
            description: "Описание или пояснение к изображению 38."
        },
        {
            src: "img/image2.png",
            description: "Описание или пояснение к изображению 39."
        },
        {
            src: "img/image3.png",
            description: "Описание или пояснение к изображению 40."
        },
        //пятая
        {
            src: "img/image5.png",
            description: "Описание или пояснение к изображению 41."
        },
        {
            src: "img/image6.png",
            description: "Описание или пояснение к изображению 42."
        },
        {
            src: "img/image7.png",
            description: "Описание или пояснение к изображению 43."
        },
        {
            src: "img/image8.png",
            description: "Описание или пояснение к изображению 44."
        },
        {
            src: "img/image9.png",
            description: "Описание или пояснение к изображению 45."
        }
    ];

    const imagesPerPage = 10; //сколько картинок на странице максимум

    //подсчёт количества страниц
    const pagesCount = Math.ceil(images.length / imagesPerPage);
    document.getElementById('pagesCountID').innerHTML = numToPageNum(pagesCount);

    function numToPageNum(num) { //если кол-во страниц однозначное, приводим к виду 05...
        if (num >= 0 && num < 10) {
            return `0${num}`
        }
        return num.toString()
    };

    function renderPage(pageNumber) { //отрисовка картинок при перелистывании
        if ((pageNumber === currPage) || (pageNumber*imagesPerPage >= images.length) || (pageNumber < 0)) { //
            return
        }
        const currPageImages = images.slice(pageNumber*imagesPerPage, (pageNumber+1)*imagesPerPage);
        let html = ''; //переменная для разметки
        currPageImages.forEach(image => {
            html += `
                <div class="image_wrap">
                    <img src="${image.src}" alt="">
                    <div class="image_description">
                        <p class="image_text">${image.description}</p>
                    </div>
                </div>
            `
        });
        document.getElementById('images').innerHTML = html;
        addImageClickHandlers(); //обработчик для открытия просмотра на новые изображения

        currPage = pageNumber;
        document.getElementById('currentPageNumberID').innerHTML = numToPageNum(pageNumber + 1);

    }

    document.getElementById('prevPageBtn').addEventListener("click", () => renderPage(currPage - 1));
    document.getElementById('nextPageBtn').addEventListener("click", () => renderPage(currPage + 1));

    //разворачивание изображения
    const imageViewer = document.getElementById('imageViewer');
    const closeViewer = document.getElementById('closeViewer');
    const imagesElement = document.getElementById('images');

    function openImageViewer(imgSrc) {
        const img = imageViewer.querySelector('img');
        img.src = imgSrc;
        imageViewer.style.display = "flex";
    };
    function closeImageViewer() {
        imageViewer.style.display = "none";
    };

    function addImageClickHandlers() {
        //children возвращает html коллекцию картинок. элементы массива - image_wrap
        Array.from(imagesElement.children).forEach(imageWrapElement => {
            const src = imageWrapElement.querySelector('img').src;
            imageWrapElement.addEventListener("click", () => {
                openImageViewer(src);
            })
        })
    };

    closeViewer.addEventListener("click", closeImageViewer);
    addImageClickHandlers();
}

onLoad();