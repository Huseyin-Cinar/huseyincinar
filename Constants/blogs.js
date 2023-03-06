import blog from '../styles/projects/blog.jpg'

export const custom_blogs = [
    // please add only upto 6 blogs for maintaining the ui
    {
        title: 'Shrinking Menu', //blog title
        description: 'In this article, I will talk about how to make a menu that shrinks when you scroll the screen using Html, Css and Javascript. This event will take place when our scroll down is detected by Javascript, styled by Css and tags created by Html. I hope you like it.', //blog decription
        link: 'https://futuree.netlify.app/kodlama/html-css-ve-js-ile-ekrani-kaydirinca-daralan-menu-yapma', //link your blog here
        thumbnail: blog, //blog image, can be an import or link
        categories: ['Html', 'Css', 'Javascript'] //eg. web developement, prgramming, lifestyle etc.
    },
    {
        title: 'Collapsible Description Line',
        description: 'In this article, I will talk about how to make a foldable comment line using Html, Css and Javascript. Although this line type is generally used on sites with excessive information, it provides a lot of convenience to Web Developers. I tried to explain this line, which is a very nice feature and which I like very much, in an explanatory way, I hope you like it.',
        link: 'https://futuree.netlify.app/kodlama/html-css-ve-js-ile-katlanabilir-aciklama-satiri-yapma',
        thumbnail: blog,
        categories: ['Html', 'Css', 'Javascript']
    },
    {
        title: 'Sticky Social Bars',
        description: 'In this article, I will talk about how to make a sticky social bar using Html and Css. This feature allows people to promote their social media accounts more easily, I tried to explain this feature, which has a very simple coding, in an explanatory way, I hope you like it.',
        link: 'https://futuree.netlify.app/kodlama/html-ve-css-ile-yapiskan-sosyal-bar-yapma',
        thumbnail: blog,
        categories: ['Html', 'Css']
    },
    {
        title: 'Popup Button',
        description: 'In this article, I will talk about how to make a button that opens on mouseover using Html and Css. These types of buttons Hoverable Dropdown also called , I think it will be a good article, I hope you like it.',
        link: 'https://futuree.netlify.app/kodlama/html-ve-css-ile-fare-ile-uzerine-gelindiginde-acilan-buton-yapma',
        thumbnail: blog,
        categories: ['Html', 'Css']
    },
]

// uncomment the following code if you want to fetch your medium articles and comment out the custom blogs code above
// export const medium_blogs = { username: 'yourusername'}

// uncomment the following code if you want to fetch your devto articles and comment out the custom blogs code above
// export const dev_to = { username: 'yourusername'}
