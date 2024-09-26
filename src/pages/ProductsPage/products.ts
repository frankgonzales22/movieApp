import georgeImage2 from '../../assets/images/george2.jpg';
import gregory from '../../assets/images/gregory.jpg';
import dom from '../../assets/images/dom.jpg';
import claire from '../../assets/images/claire.jpg';



export type Product = {
    description: string;
    title: string;
    price: string;
    image: string;
}

export const products: Product[] = [
    {
        description: 'Our most affordable plan that suits your lifestyle.',
        title: 'St. George',
        price: '1,000/Month',
        image: georgeImage2
    },
    {
        description: 'Simple, affordable life plans designed to fit your future.',
        title: 'St. Gregory',
        price: '1,100/Month',
        image: gregory
    },
    {
        description: 'Your life, your plan—affordable and ready to support your dreams.',
        title: 'St. Dominique',
        price: '1,285/Monthly',
        image: dom
    },
    {
        description: 'Affordable life plans that suit your needs—because your future matters.',
        title: 'St. Claire',
        price: '1,870/Monthly',
        image: claire
    },
];