import axios from 'axios';
import { getWebsiteData } from './gifService.ts';

require('dotenv').config();

jest.mock('axios');

const mockData = [

      {
        "type": "gif",
        "id": "CQpcrKmeAHDQA",
        "url": "https://giphy.com/gifs/elephant-baby-CQpcrKmeAHDQA",
        "slug": "elephant-baby-CQpcrKmeAHDQA",
        "bitly_gif_url": "http://gph.is/1EWbyvj",
        "bitly_url": "http://gph.is/1EWbyvj",
        "embed_url": "https://giphy.com/embed/CQpcrKmeAHDQA",
        "images": {
          "original": {
            "height": "238",
            "width": "350",
            "size": "2084280",
            "url": "https://media2.giphy.com/media/CQpcrKmeAHDQA/giphy.gif?cid=4647a4e0t08fkd17fnzvlbiuleh1wrrt90tfwrtmnm42tq0f&ep=v1_gifs_search&rid=giphy.gif&ct=g",
            "mp4_size": "2491085",
            "mp4": "https://media2.giphy.com/media/CQpcrKmeAHDQA/giphy.mp4?cid=4647a4e0t08fkd17fnzvlbiuleh1wrrt90tfwrtmnm42tq0f&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
            "webp_size": "1790212",
            "webp": "https://media2.giphy.com/media/CQpcrKmeAHDQA/giphy.webp?cid=4647a4e0t08fkd17fnzvlbiuleh1wrrt90tfwrtmnm42tq0f&ep=v1_gifs_search&rid=giphy.webp&ct=g",
            "frames": "62",
            "hash": "d2598cb09b5278cc3efbddd9d3979ca8"
          },
          "fixed_height": {
            "height": "100",
            "width": "147",
            "size": "579557",
            "url": "https://media2.giphy.com/media/CQpcrKmeAHDQA/100.gif?cid=4647a4e0t08fkd17fnzvlbiuleh1wrrt90tfwrtmnm42tq0f&ep=v1_gifs_search&rid=100.gif&ct=g",
            "mp4_size": "204160",
            "mp4": "https://media2.giphy.com/media/CQpcrKmeAHDQA/100.mp4?cid=4647a4e0t08fkd17fnzvlbiuleh1wrrt90tfwrtmnm42tq0f&ep=v1_gifs_search&rid=100.mp4&ct=g",
            "webp_size": "324346",
            "webp": "https://media2.giphy.com/media/CQpcrKmeAHDQA/100.webp?cid=4647a4e0t08fkd17fnzvlbiuleh1wrrt90tfwrtmnm42tq0f&ep=v1_gifs_search&rid=100.webp&ct=g"
          },
        }
      },
      {
        "type": "gif",
        "id": "ccSrsgirRLP0Y",
        "url": "https://giphy.com/gifs/baby-hill-slides-ccSrsgirRLP0Y",
        "slug": "baby-hill-slides-ccSrsgirRLP0Y",
        "bitly_gif_url": "http://gph.is/2sGwyS2",
        "bitly_url": "http://gph.is/2sGwyS2",
        "embed_url": "https://giphy.com/embed/ccSrsgirRLP0Y",
        "images": {
          "original": {
            "height": "480",
            "width": "299",
            "size": "17217068",
            "url": "https://media0.giphy.com/media/ccSrsgirRLP0Y/giphy.gif?cid=4647a4e0t08fkd17fnzvlbiuleh1wrrt90tfwrtmnm42tq0f&ep=v1_gifs_search&rid=giphy.gif&ct=g",
            "mp4_size": "3419913",
            "mp4": "https://media0.giphy.com/media/ccSrsgirRLP0Y/giphy.mp4?cid=4647a4e0t08fkd17fnzvlbiuleh1wrrt90tfwrtmnm42tq0f&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
            "webp_size": "4685934",
            "webp": "https://media0.giphy.com/media/ccSrsgirRLP0Y/giphy.webp?cid=4647a4e0t08fkd17fnzvlbiuleh1wrrt90tfwrtmnm42tq0f&ep=v1_gifs_search&rid=giphy.webp&ct=g",
            "frames": "225",
            "hash": "a541c0f610a39967f0a73939eb61a742"
          },
          "fixed_height": {
              "height": "200",
              "width": "125",
              "size": "4240099",
              "url": "https://media0.giphy.com/media/ccSrsgirRLP0Y/200.gif?cid=4647a4e0t08fkd17fnzvlbiuleh1wrrt90tfwrtmnm42tq0f&ep=v1_gifs_search&rid=200.gif&ct=g",
              "mp4_size": "360710",
              "mp4": "https://media0.giphy.com/media/ccSrsgirRLP0Y/200.mp4?cid=4647a4e0t08fkd17fnzvlbiuleh1wrrt90tfwrtmnm42tq0f&ep=v1_gifs_search&rid=200.mp4&ct=g",
              "webp_size": "1359152",
              "webp": "https://media0.giphy.com/media/ccSrsgirRLP0Y/200.webp?cid=4647a4e0t08fkd17fnzvlbiuleh1wrrt90tfwrtmnm42tq0f&ep=v1_gifs_search&rid=200.webp&ct=g"
            }
        }
      }
];

test('fetches GIFs from Giphy API', async () => {
    axios.get.mockResolvedValue({data: {data: mockData}});

    const gifs = await getWebsiteData('cheese');

    expect(gifs).toEqual(mockData)
})