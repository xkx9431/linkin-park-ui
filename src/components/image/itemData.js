/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

import sunnyImage from "../../model/imgs/sunny.jpg"
import rainnyImage from "../../model/imgs/rainy.png"
import CarInLeave from "../../model/imgs/car_in_the_leave.png"
import DarkNight from "../../model/imgs/darkNight.png"
const itemData = [
    {
        img: sunnyImage,
        title: 'Sunny',
        author: 'xkx',
    },
    {
        img: rainnyImage,
        title: 'Rainny',
        author: 'xkx',
    },
    {
        img: CarInLeave,
        title: 'Car is going leave',
        author: 'xkx',
    },
    {
        img: DarkNight,
        title: 'Dark Light',
        author: 'xkx',
    },
];

export default itemData;