
const sofas = [
    {
        "id": 1,
        "design": "Piero Lissoni",
        "name": "Amoenus Soft",
        "price": "3677",
        "image": "https://firebasestorage.googleapis.com/v0/b/italian-furniture-1bf48.appspot.com/o/Amoenus%20Soft.jpg?alt=media&token=e66c3248-665d-41d5-9af9-f2c992f3b000",
        "description": "Introducing the newly reimagined Amoenus Sof. This head turning sofa blends traditional style and comfort with modern industrial technique. A classic backrest is replaced with a myriad of free-floating feather cushions, allowing rearrangement to your own satisfaction. Even more inviting is the generous width and seat depth. The delicate but strong legs create the illusion of floating. Unwinding with Hugo will surely bring you up to cloud nine.",
        "collection": "levante"
    },
    {
        "id": 2,
        "design": "Antonio Citterio",
        "name": "Aurae",
        "price": "3080",
        "image": "https://firebasestorage.googleapis.com/v0/b/italian-furniture-1bf48.appspot.com/o/Aurae.jpg?alt=media&token=e0725916-4893-4476-a36c-c636a91894e3",
        "description": "A classic reimagined, the Aurae Sofa - is a structured armless seat with boxy flare and a low-set profile. An elevated back rest provides ample lean-back support, while high-density foam cushioning is nicely rounded and perfectly firm. Detailed pipe stitching around the edges finishes the modern design that can be combined with other Porter Modular pieces to create your perfect sectional.",
        "collection": "ellipse"
    },
    {
        "id": 3,
        "design": "Antonio Citterio",
        "name": "B&B Atoll",
        "price": "6178",
        "image": "https://firebasestorage.googleapis.com/v0/b/italian-furniture-1bf48.appspot.com/o/B%26B%20Atoll.jpg?alt=media&token=434a4549-7082-4258-9231-75fb22912e58",
        "description": "Compelling in its simple yet cutting edge style, the B&B Atoll modular collection is a bold take on contemporary design. The sleek, low profile frame is met with grand cloud-like seat cushions to create the statement making structure. The B&B Atoll also balances the expansive seating with an interchangeable side table insert that is offered in walnut, natural, and white lacquer finishes. Grounded on cast stainless steel legs with an elegant brushed finish, this piece's thoughtful composition demonstrates an exceptional opportunity for modern luxury in your home.",
        "collection": "levante"
    },
    {
        "id": 4,
        "design": "Mario Bellini",
        "name": "Belle Doyle",
        "price": "5823",
        "image": "https://firebasestorage.googleapis.com/v0/b/italian-furniture-1bf48.appspot.com/o/Belle%20Doyle.jpg?alt=media&token=eb5b4184-3848-485d-8647-45068b99f80b",
        "description": "Belle Doyle’s subtle curves of the padded armrests add visual elegance while delivering plush and stable support for the spacious seating. Much like the grandeur of Italian design, Belle Doyle is especially suited for large luxury spaces with more width than the average sofa, providing an overall grander feel for your home. It's is a full modular design, with add-on pieces such as an ottoman and middle section that can be seen on the Belle Doyle Modular Sectional page. Enjoy our preset configuration or customize your own design by purchasing pieces separately.",
        "collection": "butterfly"
    },
    {
        "id": 5,
        "design": "Piero Lissoni",
        "name": "Belle Doyle",
        "price": "1895",
        "image": "https://firebasestorage.googleapis.com/v0/b/italian-furniture-1bf48.appspot.com/o/Belle%20Doyl.jpg?alt=media&token=1ccbcd5c-7c76-4ecd-bc59-e0d9898231a8",
        "description": "A classic reimagined, the Belle Doyle is a structured armless seat with boxy flare and a low-set profile. An elevated back rest provides ample lean-back support, while high-density foam cushioning is nicely rounded and perfectly firm. Detailed pipe stitching around the edges finishes the modern design that can be combined with other Porter Modular pieces to create your perfect sectional.",
        "collection": "modern"
    },
    {
        "id": 6,
        "design": "Piero Lissoni",
        "name": "Charles Large",
        "price": "7644",
        "image": "https://firebasestorage.googleapis.com/v0/b/italian-furniture-1bf48.appspot.com/o/Charles%20Large.jpg?alt=media&token=2192244e-9d22-4b77-8faa-0d4748a9c3be",
        "description": "Exuding stylish form and comfort, Charles Large is a wide-width and low profile piece inspired by modern and Nordic design. The gorgeous brushed brass metal base is a beautiful contrast to the customizable soft fabric upholstery. This base sits fully to the floor and is set back two inches for additional contrast, providing a grander illusion of size and space. The cushions easily seat three people in optimal comfort, with the width of the armrests also offering a functional purpose as a perfect place for resting your favorite drink or a book.",
        "collection": "positano"
    },
    {
        "id": 7,
        "design": "Jeffrey Bernett",
        "name": "Coronado",
        "price": "3443",
        "image": "https://firebasestorage.googleapis.com/v0/b/italian-furniture-1bf48.appspot.com/o/Coronado.jpg?alt=media&token=1f9d09d8-b6fe-4b8b-bf30-94917e914ee1",
        "description": "The Coronado Sofa is a simple structured sofa with boxy flare and a low-set profile. Square arm rests are made like a side table, while an elevated back rest provides ample lean-back support. High-density foam cushioning is nicely rounded and perfectly firm.",
        "collection": "modern"
    },
    {
        "id": 8,
        "design": "Mario Bellini",
        "name": "Diesis Naviglio",
        "price": "6332",
        "image": "https://firebasestorage.googleapis.com/v0/b/italian-furniture-1bf48.appspot.com/o/Diesis%20Naviglio.jpg?alt=media&token=3f8589f9-321e-489e-b3da-1e28917a7559",
        "description": "Diesis Naviglio is a traditional sectional with subtle Nordic whimsy. It's straight frame and symmetrical shape are surprised with plump, overflowing cushions and delicate legs. Always intentional, this is a sectional made for the thoughtful family.",
        "collection": "positano"
    },
    {
        "id": 9,
        "design": "Mario Bellini",
        "name": "Do-Maru",
        "price": "6117",
        "image": "https://firebasestorage.googleapis.com/v0/b/italian-furniture-1bf48.appspot.com/o/Do-Maru.jpg?alt=media&token=7f9d2e1f-60cd-4867-8a31-cbb058845ffe",
        "description": "This statement sofa is styled with sleek tapered legs and contrasting lines. Do-Maru seamlessly blends traditional design with modern trends using artisan techniques to produce characteristics such as beautiful piping along the edges and gentle tufting on the seat. Padded with a mixture of eco-friendly foam and premium goose feathers to create optimal firmness, while cylindrical side cushions add the finishing touch. Perfect design and comfort are met with custom upholstery options to match your home. Get the entire set with matching armchair and sectional.",
        "collection": "levante"
    },
    {
        "id": 10,
        "design": "Jeffrey Bernett",
        "name": "Eda-Mame",
        "price": "2897",
        "image": "https://firebasestorage.googleapis.com/v0/b/italian-furniture-1bf48.appspot.com/o/Eda-Mame.jpg?alt=media&token=188e3275-ab27-4e19-bfc0-f9f5df577aae",
        "description": "Incorporate modern simplicity into any living space with our Eda-Mame collection. Made of plush fabric and a built-in walnut slat styled table; the Eda-Mame is perfect for relaxing with a book or a glass of wine on a calm evening in.",
        "collection": "ellipse"
    },
    {
        "id": 11,
        "design": "Antonio Citterio",
        "name": "Le Bambole",
        "price": "1578",
        "image": "https://firebasestorage.googleapis.com/v0/b/italian-furniture-1bf48.appspot.com/o/Le%20Bambole.jpg?alt=media&token=4ae9bf33-c573-4ee3-b863-7409d93532ad",
        "description": "Le Bambole's classic design is derived from a sophisticated form of soft lines and a just-right low profile. The compact size of the original sofa is ideal for smaller spaces, while custom configurations of the sectional can be a perfect fit for any living room. The low backrest matched with high down-filled removable cushions creates an elegantly stylish aesthetic. The base is also available in an assortment of colors and finishes for a truly unique look. This leather has natural color and marking variations that can vary, making each piece of furniture unique. The soft surface will scuff and a beautiful vintage patina will develop with use.",
        "collection": "butterfly"
    },
    {
        "id": 12,
        "design": "Piero Lissoni",
        "name": "Michel Effe",
        "price": "5065",
        "image": "https://firebasestorage.googleapis.com/v0/b/italian-furniture-1bf48.appspot.com/o/Michel%20Effe.jpg?alt=media&token=26cd5173-f530-43f5-bbca-f0c88acfac50",
        "description": "Take in Michel Effe's distinguished approach to contemporary design. From subtle details along the armrests and across the base, the eye is drawn to this 3-seater sofa’s innovative structure. Genuine leather options contribute to its refined frame and enhance its charming lines. The European styled backrest and seat cushions are filled with our premium down, creating a sumptuous level of comfort for their sleek form. This modern piece is finished with solid steel legs making it a staple for elevated living.",
        "collection": "positano"
    },
    {
        "id": 13,
        "design": "Jeffrey Bernett",
        "name": "Rasperro",
        "price": "4775",
        "image": "https://firebasestorage.googleapis.com/v0/b/italian-furniture-1bf48.appspot.com/o/Rasperro.jpg?alt=media&token=84907c0f-e1ff-49a8-9e4d-67e2ad8b08b9",
        "description": "The sleek and flat profile of the Rasperro marries sophisticated style with casual comfort. It’s subtle curves of the padded armrest add visual elegance while delivering plush and stable support for the spacious seating. Rasperro is a modular design that can be customized to a configuration that fits your unique space. Much like the grandeur of Italian design, Rasperro is especially suited for large luxury spaces as each sectional piece is formed with more width than the average sofa, providing an overall grander feel for your home. Enjoy our preset configuration or customize your own design by purchasing pieces separately.",
        "collection": "positano"
    },
    {
        "id": 14,
        "design": "Jeffrey Bernett",
        "name": "Tufty-Time",
        "price": "2589",
        "image": "https://firebasestorage.googleapis.com/v0/b/italian-furniture-1bf48.appspot.com/o/Tufty-Time.jpg?alt=media&token=66113cee-a88b-4f9a-ba44-36754c8ef019",
        "description": "This head turning sectional blends traditional style and comfort with modern industrial technique. A classic backrest is replaced with a myriad of free-floating feather filled cushions, allowing rearrangement to your own satisfaction. Even more inviting is the generous width of the chaise and depth of the seat. This spacious design creates ample room to move positions from left to right, or relax comfortably with your partner and pet. The delicate but strong supportive legs create the illusion of floating. This leather has natural color and marking variations that can vary, making each piece of furniture unique. The soft surface will scuff and a beautiful vintage patina will develop with use.",
        "collection": "modern"
    },
    {
        "id": 15,
        "design": "Mario Bellini",
        "name": "Tufty-Time",
        "price": "3996",
        "image": "https://firebasestorage.googleapis.com/v0/b/italian-furniture-1bf48.appspot.com/o/Tufty-Tim.jpg?alt=media&token=35605a76-43a8-4360-bf1b-be83c32c8fcd",
        "description": "Tufty-Time's tailored yet pillowy form is the quintessence of luxury and a favorite in European design. Polished stainless steel framing gives a modern upgrade to the classic style. Enjoy the sumptuous all-around cushioning filled with three layers of high-density foam and topped with premium goose feathers. The plush, rounded form is a striking contrast to the square frame and industrial flair. Complete your sectional with your choice of custom upholstery.",
        "collection": "ellipse"
    }
]

export default sofas
