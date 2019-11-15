export default [
  {
    title: "Pocztowka z WWA, lato '19",
    artist: 'Taco Hemingway',
    date: '07-23-2019',
    img: {
      url: 'pocztowka_z_wwa.jpg',
      alt: "Pocztówka z WWA, lato '19"
    }
  },
  {
    title: 'Flagey',
    artist: 'Taco Hemingway',
    date: '07-13-2018',
    img: {
      url: 'flagey.jpg',
      alt: 'Flagey'
    },
    tracklist: [
      {
        title: 'Bakayoko',
        length: '03:39'
      },
      {
        title: 'Pokédex',
        length: '03:34'
      },
      {
        title: 'Anja',
        length: '03:09'
      },
      {
        title: 'Czarna Kawa Czeka',
        length: '03:30'
      },
      {
        title: 'Italodisco',
        length: '02:56'
      }
    ]
  },
  {
    title: 'Café Belga',
    artist: 'Taco Hemingway',
    date: '07-13-2018',
    img: {
      url: 'cafe_belga.jpg',
      alt: 'Café Belga'
    }
  },
  {
    title: 'Szprycer',
    artist: 'Taco Hemingway',
    date: '07-30-2017',
    img: {
      url: 'szprycer.jpg',
      alt: 'Szprycer'
    }
  },
  {
    title: 'Marmur',
    artist: 'Taco Hemingway',
    date: '11-03-2016',
    img: {
      url: 'marmur.jpg',
      alt: 'Marmur'
    }
  },
  {
    title: 'Wosk',
    artist: 'Taco Hemingway',
    date: '07-26-2016',
    img: {
      url: 'wosk.jpg',
      alt: 'Wosk'
    }
  },
  {
    title: 'Umowa o dzieło',
    artist: 'Taco Hemingway',
    date: '06-27-2015',
    img: {
      url: 'umowa_o_dzielo.jpg',
      alt: 'Umowa o dzieło'
    }
  },
  {
    title: 'Trójkąt Warszawski',
    artist: 'Taco Hemingway',
    date: '12-19-2014',
    img: {
      url: 'trojkat_warszawski.jpg',
      alt: 'Trójkąt Warszawski'
    }
  },
  {
    title: 'Young Hems',
    artist: 'Taco Hemingway',
    date: '12-26-2013',
    img: {
      url: 'young_hems.jpg',
      alt: 'Young Hems'
    }
  },
  {
    title: 'Who Killed JFK',
    artist: 'Taco Hemingway',
    date: '08-30-2011',
    img: {
      url: 'who_killed_jfk.jpg',
      alt: 'Who Killed JFK'
    }
  },
  {
    title: 'Małomiasteczkowy',
    artist: 'Dawid Podsiadło',
    date: '10-19-2018',
    img: {
      url: 'malomiasteczkowy.jpg',
      alt: 'Małomiasteczkowy'
    }
  },
  {
    title: 'Annoyance and Disappointment',
    artist: 'Dawid Podsiadło',
    date: '11-06-2015',
    img: {
      url: 'annoyance_and_disappointment.jpg',
      alt: 'Annoyance and Disappointment'
    }
  },
  {
    title: 'Comfort And Happiness',
    artist: 'Dawid Podsiadło',
    date: '05-28-2013',
    img: {
      url: 'comfort_and_happiness.jpg',
      alt: 'Comfort And Happiness'
    }
  },
  {
    title: '0,25 mg',
    artist: 'Taconafide',
    date: '04-13-2018',
    img: {
      url: '0_25_mg.jpg',
      alt: '0,25 mg'
    }
  },
  {
    title: 'Soma 0,5 mg',
    artist: 'Taconafide',
    date: '04-13-2018',
    img: {
      url: 'soma_0_5_mg.jpg',
      alt: 'Soma 0,5 mg'
    }
  },
  {
    title: 'Helsinki',
    artist: 'Daria Zawiałow',
    date: '03-08-2019',
    img: {
      url: 'helsinki.jpg',
      alt: 'Helsinki'
    }
  },
  {
    title: 'A kysz!',
    artist: 'Daria Zawiałow',
    date: '03-03-2017',
    img: {
      url: 'a_kysz.jpg',
      alt: 'A kysz!'
    }
  }
].sort((a, b) => new Date(b.date) - new Date(a.date))
