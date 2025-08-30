export type Translations = {
  [key: string]: {
    nav: {
      ourStory: string;
      ourHoney: string;
      faq: string;
    };
    hero: {
      subtitle: string;
      cta: string;
      imageAlt: string;
    };
    story: {
      title: string;
      p1: string;
      p2_part1: string;
      p2_part2: string;
      p3: string;
      imageAlt: string;
    };
    products: {
      title: string;
      description: string;
      cta: string;
      imageAlt: string;
    };
    faq: {
      title: string;
      subtitle: string;
      form: {
        label: string;
        placeholder: string;
        button: string;
      };
      toast: {
        noFaqs: {
          title: string;
          description: string;
        };
        error: {
          title: string;
          description: string;
        };
      };
    };
    footer: {
      rightsReserved: string;
      tagline: string;
    };
  };
};

export const translations = {
  en: {
    nav: {
      ourStory: 'Our Story',
      ourHoney: 'Our Honey',
      faq: 'FAQs',
    },
    hero: {
      subtitle: 'From the heart of Macahel, a UNESCO World Biosphere Reserve, comes a honey as pure and wild as its origins.',
      cta: 'Discover the Elixir',
      imageAlt: 'A majestic honeybee on a flower with a dark background.',
    },
    story: {
      title: 'Valley of the Bees',
      p1: 'In the far reaches of northeastern Turkey, cradled by the soaring Kaçkar Mountains, lies the Macahel (Camili) Valley—a sanctuary of biodiversity so precious it is protected as a UNESCO World Biosphere Reserve. This isolated haven, with its ancient forests, glacial lakes, and alpine meadows, is one of the last places on Earth where nature\'s rhythm remains sovereign.',
      p2_part1: 'Here, a unique and resilient pure-strain of the Caucasian honey bee,',
      p2_part2: 'thrives. These remarkable bees embark on a daily pilgrimage through a landscape bursting with endemic flora. They forage on a rich tapestry of wildflowers, from the vibrant rhododendrons of the high pastures to the sweet blossoms of ancient chestnut forests, creating a honey that is a liquid snapshot of this pristine, untouched ecosystem.',
      p3: 'Alioni is more than just honey; it is a solemn promise to preserve this paradise. We practice time-honored, sustainable beekeeping traditions that honor the natural cycles of our bees and their environment. Each jar is a tribute to the land, the bees, and the generations of guardians who have kept the soul of Macahel vibrant and untamed.',
      imageAlt: 'A stunning, misty mountain landscape in the Macahel Valley, Artvin, with lush green forests.',
    },
    products: {
      title: 'The Alioni Reserve',
      description: 'Each jar holds the essence of a thousand alpine wildflowers, a complex symphony of flavors with notes of wild berries, sweet chestnut, and a whisper of mountain herbs. This is a rare, multi-floral honey, harvested just once a year, reflecting the untamed spirit of the Macahel valley.',
      cta: 'Shop Now',
      imageAlt: 'A beautiful render of an Alioni Limited No. 1 honey jar with a geometric glass design and a wooden cap.',
    },
    faq: {
      title: 'AI-Powered FAQs',
      subtitle: 'Paste content from our site below—perhaps from our story—and let our AI generate instant answers to your questions, extracting key details to satisfy your curiosity.',
      form: {
        label: 'Source Content',
        placeholder: "Paste content here to see how our AI generates relevant FAQs. For example, you could use the text from 'Valley of the Bees' section.",
        button: 'Generate',
      },
      toast: {
        noFaqs: {
          title: 'No FAQs Generated',
          description: "The AI couldn't find enough specific information to generate FAQs.",
        },
        error: {
          title: 'An error occurred',
          description: 'Failed to generate FAQs. Please try again later.',
        },
      },
    },
    footer: {
      rightsReserved: 'Alioni. All Rights Reserved.',
      tagline: 'The Soul of Macahel',
    },
  },
  tr: {
    nav: {
      ourStory: 'Hikayemiz',
      ourHoney: 'Balımız',
      faq: 'SSS',
    },
    hero: {
      subtitle: 'Macahel\'in kalbinden, bir UNESCO Dünya Biyosfer Rezervi\'nden, kökeni kadar saf ve yabani bir bal geliyor.',
      cta: 'İksiri Keşfet',
      imageAlt: 'Karanlık bir arka planda bir çiçeğin üzerindeki görkemli bir bal arısı.',
    },
    story: {
      title: 'Arıların Vadisi',
      p1: 'Türkiye\'nin kuzeydoğusunun uzak noktalarında, yüksek Kaçkar Dağları\'nın kucağında, UNESCO Dünya Biyosfer Rezervi olarak korunan çok değerli bir biyoçeşitlilik sığınağı olan Macahel (Camili) Vadisi yer almaktadır. Antik ormanları, buzul gölleri ve alpin çayırları ile bu izole sığınak, doğanın ritminin egemen kaldığı Dünya\'daki son yerlerden biridir.',
      p2_part1: 'Burada, Kafkas bal arısının eşsiz ve dayanıklı saf bir türü olan',
      p2_part2: 'yaşar. Bu olağanüstü arılar, endemik bitki örtüsüyle dolu bir manzarada günlük bir yolculuğa çıkarlar. Yüksek meraların canlı ormangüllerinden antik kestane ormanlarının tatlı çiçeklerine kadar zengin bir kır çiçeği dokusundan beslenirler ve bu el değmemiş, dokunulmamış ekosistemin sıvı bir anlık görüntüsü olan bir bal yaratırlar.',
      p3: 'Alioni sadece baldan daha fazlasıdır; bu cenneti korumak için verilmiş ciddi bir sözdür. Arılarımızın ve çevrelerinin doğal döngülerine saygı duyan, zamanla onurlandırılmış, sürdürülebilir arıcılık geleneklerini uyguluyoruz. Her kavanoz, toprağa, arılara ve Macahel\'in ruhunu canlı ve evcilleştirilmemiş tutan koruyucu nesillere bir övgüdür.',
      imageAlt: 'Artvin, Macahel Vadisi\'nde yemyeşil ormanları olan çarpıcı, sisli bir dağ manzarası.',
    },
    products: {
      title: 'Alioni Rezervi',
      description: 'Her kavanoz, binlerce alpin kır çiçeğinin özünü, yabani meyveler, tatlı kestane ve dağ otlarının fısıltısı notalarıyla karmaşık bir lezzet senfonisini barındırır. Bu, Macahel vadisinin evcilleştirilmemiş ruhunu yansıtan, yılda sadece bir kez hasat edilen nadir, çok çiçekli bir baldır.',
      cta: 'Şimdi Al',
      imageAlt: 'Geometrik cam tasarımlı ve ahşap kapaklı bir Alioni Limited No. 1 bal kavanozunun güzel bir render\'ı.',
    },
    faq: {
      title: 'Yapay Zeka Destekli SSS',
      subtitle: 'Aşağıdaki sitemizden içerik yapıştırın—belki hikayemizden—ve yapay zekamızın merakınızı gidermek için önemli ayrıntıları çıkararak sorularınıza anında yanıtlar üretmesine izin verin.',
      form: {
        label: 'Kaynak İçerik',
        placeholder: "Yapay zekamızın ilgili SSS\'leri nasıl oluşturduğunu görmek için buraya içerik yapıştırın. Örneğin, 'Arıların Vadisi' bölümündeki metni kullanabilirsiniz.",
        button: 'Oluştur',
      },
      toast: {
        noFaqs: {
          title: 'SSS Oluşturulamadı',
          description: 'Yapay zeka, SSS oluşturmak için yeterli spesifik bilgi bulamadı.',
        },
        error: {
          title: 'Bir hata oluştu',
          description: 'SSS oluşturulamadı. Lütfen daha sonra tekrar deneyin.',
        },
      },
    },
    footer: {
      rightsReserved: 'Alioni. Tüm Hakları Saklıdır.',
      tagline: 'Macahel\'in Ruhu',
    },
  },
};
