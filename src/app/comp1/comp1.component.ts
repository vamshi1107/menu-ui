import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  data = [
    {
      resno: 'menu1',
      image: 'assets/mh.jpg',
      name: 'Maharastrain',
      description:
        'Maharashtrian or Marathi cuisine is the cuisine of the Marathi people from the Indian state of Maharashtra. It has distinctive attributes, while sharing much with other Indian cuisines.',
      address: 'Madhapur,Hyderabad',
      menu: [
        'Pavbhaji',
        ' Plain Vadapav',
        'Ragda pattice',
        'Sabhudana khicidi',
        'Bhelpuri',
        'Misal Pav',
        'Poha',
        'pithla bhakri',
        'Kadi',
      ],
    },
    {
      resno: 'menu2',
      image: 'assets/rj.jpg',
      name: 'Rajasthani',
      description:
        ' Rajasthani cuisine was influenced by both the war-like lifestyles of its inhabitants and the availability of ingredients in this arid region. Food that could last for several days and could be eaten without heating was preferred.',
      address: 'Hitech city,Hyderabad',
      menu: [
        'Pyaj ki Kachori',
        'gatte',
        'Kadhi',
        'bajara ki raab',
        'aam ki launji',
        'kalmi vada',
        'mawa kachori',
      ],
    },
    {
      resno: 'menu3',
      image: 'assets/guj.jpg',
      name: 'Gujarati',
      description:
        'gujarati cuisine consists of wide varieties of flavours adn the cusine is known for the most loved savouries which are also healthy and available throughout the year.',
      address: 'Banjara Hills,Hyderabad',
      menu: [
        'khandvi',
        'khaman Dhokla',
        ' thepla',
        'Handvo',
        ' Lilva kachori',
        'Khichu',
        'Gota',
        ' Khakra chat',
        'Dabeli',
      ],
    },
    {
      resno: 'menu4',
      image: 'assets/kl.jpg',
      name: 'Malabar',
      description:
        'Malabar cuisine is a blend of Arabia, Zamorin and Chirakkal styles of preparing food, unique to the region spanning from Kasargod to Malappuram in Kerala. In my opinion, it is heaven for a food lover, offering some of the tastiest dishes that Kerala has to offer.',
      address: 'Jubliee Hills,Hyderabad',
      menu: [
        'Idiyappam',
        'Appam with stew',
        'Sugeen',
        'Thattu dosa',
        'Pazham  nirachathu',
        'Unnakaya',
        'Neypathiri',
        'Chatti pathiri',
      ],
    },
    {
      resno: 'menu5',
      image: 'assets/bg.jpg',
      name: 'Bengali',
      description:
        "Bengali cuisine is a blend of sweet and spicy flavours. ... The simplest of meals gain an exquisite identity on adding 'phoron' or a traditional mix of pungent spices. The 'panch phoron' is used generously and it includes a combination of five spices.",
      address: 'LB Nagar,Hyderabad',
      menu: [
        'Benagali phuchka',
        'Shinghara',
        'Ghugni',
        'Kathi rolls egg',
        'kathi roll chicken',
        'chop with kasundi',
        'Jhalmuri',
        'Luchi',
        'dim-er devil bengali',
        'Nimki',
      ],
    },
    {
      resno: 'menu6',
      image: 'assets/pb.jpg',
      name: 'Punjabi',
      description:
        'Punjabi cuisine is a culinary style originating in the Punjab, a region in the northern part of the Indian subcontinent, which is now divided in an Indian part and a Pakistani part. This cuisine has a rich tradition of many distinct and local ways of cooking.',
      address: 'Jubliee Hills,Hyderabad',
      menu: [
        'Chole chat',
        'Choore',
        'Punjabi samosa',
        'mathri',
        'Aloo tikki',
        'Paneer tikka',
        'Punjiri',
        'Amritsari Macchi',
        'Dahi balle',
      ],
    },
    {
      resno: 'menu7',
      image: 'assets/ap.jpg',
      name: 'Andhra',
      description:
        'Coastal Andhra has a lot of meat and seafood simmering in its local pots which is paired with tangy hot curries and served with rice. Pulihora, or tamarind rice along with green chilies is the most popular food in Andhra Pradesh.',
      address: 'Banjara Hills,Hyderabad',
      menu: [
        'mirchi bajji',
        'punugulu',
        'medu vada',
        'Uppindi',
        'Aratikaya bajji',
        'pesara Gaarelu',
        'chakodi chat',
      ],
    },
    {
      resno: 'menu8',
      image: 'assets/bh.jpg',
      name: 'Bihari',
      description:
        'Dishes for which Bihar is famous include Bihari kebabs, litti chokha, Bihari boti, Bihari chicken masala, sattu paratha (parathas stuffed with roasted gram flour), chokha (spicy mashed eggplant and potatoes), fish curry and posta-dana ka halwa.',
      address: 'Jubliee Hills,Hyderabad',
      menu: [
        'litti chokha',
        'mal pua',
        'Bihari boti ',
        'Bihari kabab',
        'dal peetha',
        'Thekua',
        'gur anarsa',
        'Laai',
        'balushahi',
        'kadhi badi',
      ],
    },
    {
      resno: 'menu9',
      image: 'assets/mp.jpg',
      name: 'Madhyapradesh',
      description:
        'The cuisine of Madhya Pradesh varies regionally. Wheat is more common in the north and rice is more popular in the south. The cuisine of Madhya Pradesh takes inspiration from its neighbours Rajasthan, Uttar Pradesh and Maharashtra.',
      address: 'Hitech city,Hyderabad',
      menu: [
        'Dal bafla',
        'poha jalebi',
        'bhuttey ke kees',
        'Rogan josh',
        'Seekh kababs',
        'chakki ki shaak',
        'Bedai',
        'khopra patties',
        'gajak',
      ],
    },
    {
      resno: 'menu10',
      image: 'assets/ka.jpg',
      name: 'Karnataka',
      description:
        'Karnataka???s cuisine takes influence from its neighbours like Kerala, Andhra Pradesh, Tamil Nadu and Maharashtra. However, the flavours change from region to region. Mangalore and Uttara Canara are famous for their tangy seafood.',
      address: 'Madhapur,Hyderabad',
      menu: [
        'Masala vada',
        'Mysore bonda',
        'Akki roti',
        'Nippattu',
        'Neer dosa',
        'Ragi roti',
        'Maddur vada',
        'Girmit',
      ],
    },
  ];

  inp;
  p(s: string): void {
    var ele = document.getElementById(s);

    if (ele.style.display === 'none') {
      ele.style.display = 'block';
    } else {
      ele.style.display = 'none';
    }
  }

  c(s: string): void {
    let a = document.getElementById(s);
    a.style.display = 'none';
  }
  bookings = [];
  add(b, i, h) {
    if (b) {
      var order = {};
      order['item'] = i;
      order['hotel'] = h.name;
      this.bookings.push(order);
    } else {
      var cart = [];
      for (let b of this.bookings) {
        if (b.item !== i) {
          cart.push(b);
        }
      }
      this.bookings = [];
      this.bookings = cart;
    }
    sessionStorage.setItem('orders', Object.keys(this.bookings).length + '');
  }
}
