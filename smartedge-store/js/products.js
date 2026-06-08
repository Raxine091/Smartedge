// js/products.js

const baseAppleProducts = [
    {
         name: "iPhone 17 Pro Max",
         category: "Smartphones",
         price: 250000,
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_f4TPsff_nV3dBOZ82tjilfOh2V-ynSe5A&s"
    },
    { 
        name: "iPhone 16 Pro Max", 
        category: "Smartphones", 
        price: 215000, 
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRMIMh91dFK4mkJL-YOdXa2v6ijiwl5D5RH4oGlKMGytzFuf7VbYzl40XCJXsK-vu673CEmbgvo5rC0OcEAZUgDaCQZg0qZe-gp-YPVhDHwv3H-8PzVh1BM_z7KP8iiG5dB&usqp=CAc" 
    },
    { 
        name: "iPhone 16 Pro", 
        category: "Smartphones", 
        price: 175000, 
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQN8bWw5ikXHpPC3ZjxDK5ASmhSxAk3DBFBY1KoN6oFPJLMQrYXx84j3sbiw4IZe69MdRIGRHIIVTE2pKXxKISQ6SMhr5DvHZOH4HVPB7KUk67oYc3aKJ_F&usqp=CAc" 
    },
    { 
        name: "iPhone 16", 
        category: "Smartphones", 
        price: 145000, 
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSQFA0GoHZOXQzlde5ASw1WSx3hqnY18xV7Sgsefd4yg34weY-dkzm-f2AVq2QE9usmfIlmRtrhrEexDceZ4FKcIibOWLKoU808IfojOdh1M_R60qLeJp298wVmMOPxMcLIiWnE8Q&usqp=CAc" 
    },
    { 
        name: "MacBook Pro M4", 
        category: "Laptops", 
        price: 323000, 
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT4dj36RlCXpdK67HWUvogwtNd-Ujw-5bvsU5nmzjnVVCkDcGH8JeYaX5W4fqz55QwztY0CkaAW9b8gKbIxPU2KOuwzEP6fXuC_nPnUN86UFO42U_f8xNffQw4siAeF7tAY2wyx1Rk&usqp=CAc" 
    },
    { 
        name: "MacBook Air M3", 
        category: "Laptops", 
        price: 195000, 
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQjdzedQNPfi5PPNdOy2LVR4lAx2956d5XiKrJ1b1M6N4E1UJH9IUqvZKTanN8tn3w0dXqLtfsCGhATmWHSt8dWvxmMsv5Y0PaICMgoSRCTMzLVIv02PpL-ij8Zfb9iDoKjlYo&usqp=CAc" 
    },
    { 
        name: "iPad Pro 13-inch", 
        category: "Tablets", 
        price: 190000, 
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTEoyBCwafH1YExWvbmUJWw7xl7tZWa_NcA_gZuDDHqeq5RhYxSgdeXVDm3s17qiUE-kDjf-U_QhODsBRWtrvhYcYS9Ud8oRbRReQYS4TNTkvIzWpz7EnicspZwHpZejohw1oJ8Xw&usqp=CAc" 
    },
    { 
        name: "iPad Air 11-inch", 
        category: "Tablets", 
        price: 95000, 
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSG3EZ2pbXxYQgKC07IU7wMbB5mGkGVc5DDqE6Y18OJFLpj-NtH1Nk6zGC6Z1tj5SUqLXHG_fyE-7qJ5RdFMv10-owarvRa90MXk0xXMstykcC-_x-7GqQsLQ&usqp=CAc" 
    },
    { 
        name: "AirPods Max", 
        category: "Headphones", 
        price: 89000, 
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR5Ia7Ek9FuKODQ5PT5K9W-hNxknK808C1-QmcCqYop6FIiM3U03StBKh6n_eHQZH-yDgP9PHJ78zCl-MmMwvwH9RTEnstAQ4DXa77i4DNg72bmuEvU760544m3hpAlRdyZYPYkEUuWnQ&usqp=CAc" 
    },
    { 
        name: "Apple Watch Ultra 2", 
        category: "Smartwatches", 
        price: 120000, 
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRX1iVRS3zuYMjij-EAvgawp7kgmfRKXMK7gmFW6BlJAdF65AYsb06JRRrTxGWTZPXfkL5VhWYPit2Q00nHyNoUngz3g3q2TDqm5da-u76xKMRat8D-BmhHndym&usqp=CAc" 
    },
    { 
        name: "Magic Keyboard", 
        category: "Accessories", 
        price: 45000, 
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSkd5PEG2RcOoOXNtjXuoEZ2tafzODzfac6opPU22LRgJ-wniFPVcu9uAuALm1GEXQnPW_pctJpmTwHM3JYCSmV_L4C0q1cSJkOWhfpvTmU9M8pyuLKwLw&usqp=CAc" 
    }
];

const storageOptions = ["128GB", "256GB", "512GB", "1TB"];

const products = [];

for (let i = 0; i < 100; i++) {
    const base = baseAppleProducts[i % baseAppleProducts.length];
    const skipStorage = ["Headphones", "Accessories", "Smartwatches"].includes(base.category);
    const storage = skipStorage ? "" : storageOptions[i % storageOptions.length];
    const displayName = skipStorage ? base.name : `${base.name} - ${storage}`;
    const displayDesc = skipStorage 
        ? `Experience the premium performance of the ${base.name}.`
        : `Experience the premium performance of the ${base.name} with ${storage} of storage.`;

    products.push({
        id: i + 1,
        name: displayName,
        price: base.price + (i * 500),
        category: base.category,
        image: base.image, 
        description: displayDesc
    });
}
