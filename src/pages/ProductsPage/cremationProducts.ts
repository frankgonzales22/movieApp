import jude from '../../assets/images/jude.jpg';
import james from '../../assets/images/james.jpg';




export type CremationProduct = {
    description: string;
    title: string;
    price: string;
    image: string;
}

export const cremationProducts: CremationProduct[] = [
    {
        description: 'Affordable peace of mind: Our cremation plan offers respectful care at a price that fits your lifestyle.',
        title: 'St. James',
        price: '1,255/Month',
        image: james
    },
    {
        description: 'Honor your loved one with our premium plan, featuring a viewing in a casket that will be donated to a family in need.',
        title: 'St. Jude',
        price: '1,880/Month',
        image: jude
    }
];