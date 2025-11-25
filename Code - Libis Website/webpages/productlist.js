var myImage = document.getElementById('mainImage');
var images = [
    '../images/productlist/02. Kamias (Bilimbi) (Averrhoa bilimbi).jpg',
    '../images/productlist/03. Kalamansi (Calamondin) (Citrofortunella microcarpa).jpg',
    '../images/productlist/04. Papaya (Papaya) (Carica papaya).JPG',
    '../images/productlist/05. Tundan (Dwarf Banana) (Musa acuminata).jpg',
    '../images/productlist/07. Rambutan (Rambutan) (Nephelium lappaceum).jpg',
    '../images/productlist/08. Suha (Pomelo) (Citrus maxima).jpg',
    '../images/productlist/09. Atis (Sugar Apple) (Annona squamosa).jpg',
    '../images/productlist/10. Guyabano (Soursop) (Annona muricata).jpg',
    '../images/productlist/11. Lemon (Lemon) (Citrus limon).jpg',
    '../images/productlist/12. Dalanghita (Mandarin Orange) (Citrus reticulata).jpg',
    '../images/productlist/13. Langka (Jackfruit) (Artocarpus heterophyllus).jpg',
    '../images/productlist/14. Duhat (Black Plum) (Syzygium cumini).jpg',
    '../images/productlist/15. Avocado (Avocado) (Persea americana).jpg',
    '../images/productlist/16. Sinegwelas (Spanish Plum) (Spondias purpurea).jpg',
    '../images/productlist/17. Chico (Sapodilla) (Manilkara zapota).jpg',
    '../images/productlist/18. Guava (Guava) (Psidium guajava).jpg',
    '../images/productlist/19. Lanzones (Lanzones) (Lansium parasiticum).jpg',
    '../images/productlist/24. Yellow Bell (Yellow Bell) (Tecoma stans).jpg',
    '../images/productlist/25. Milendres White (Milendres) (Ixora chinensis).jpg',
    '../images/productlist/26. Kabalyero (Bougainvillea) (Bougainvillea spp.).jpg',
    '../images/productlist/27. Bridal Boket (Spiral Ginger) (Costus woodsonii).jpg',
    '../images/productlist/28. Sampaguita (Jasmine) (Jasminum sambac).jpg',
    '../images/productlist/30. Manga Kalabaw (Carabao Mango) (Mangifera indica).jpg',
    '../images/productlist/31. Manga Pico (Pico Mango) (Mangifera indica).jpg',
];
var imageIndex = 1;
var description = document.getElementById("description");
var text = [
    "The Kamias plant features slender, drooping branches with small, elongated leaves. It is renowned for its distinctive, tart flavor which lends a unique taste to various Filipino dishes.",
    "Kalamansi is a small citrus tree adorned with glossy, green leaves and fragrant, white flowers. Its diminutive, round fruits are prized for their zesty juice.",
    "Papaya (Papaya) (Carica papaya): The Papaya tree showcases large, lobed leaves atop a straight, unbranched trunk. It is best known for its sweet, orange fruits that are consumed both ripe and unripe, offering a range of culinary applications.",
    "The Tundan banana plant is characterized by its compact stature and vibrant green leaves. Its clusters of small, plump fruits, often called finger bananas, boast a delightful, sweet taste and creamy texture.",
    "The Rambutan tree showcases feathery, pinnate leaves and an abundance of hairy, oval fruits. Once peeled, these fruits reveal juicy, translucent flesh with a slightly acidic and pleasantly sweet taste.",
    "The Suha tree features glossy, dark green leaves and fragrant, white flowers. Its large, spherical fruits are prized for their thick rind, enclosing juicy, slightly tangy segments that range from pale white to pink or red.",
    "The Atis tree displays oblong, pale green leaves and produces distinctive, heart-shaped fruits. These fruits contain soft, white flesh dotted with glossy black seeds, boasting a uniquely sweet and custard-like taste.",
    "The Guyabano tree boasts large, glossy leaves and green, spiky-skinned fruits. Within its thorn-covered exterior lies creamy, white flesh renowned for its pleasantly tangy flavor, often used to create refreshing beverages.",
    "The Lemon tree features bright green leaves and fragrant, white flowers. Its vibrant yellow fruits are known for their intensely tart juice, a popular ingredient for adding a zesty kick to various culinary creations.",
    "The Dalanghita tree bears small, glossy leaves and fragrant, white blossoms. Its loose-skinned, orange fruits are cherished for their sweet and easy-to-peel segments, making them a convenient and flavorful snack.",
    "The Langka tree showcases large, lobed leaves and green, spiky fruits. Upon opening, the fruits reveal an array of golden-yellow, fibrous segments with a subtly sweet taste and distinctive aroma.",
    "The Duhat tree features elliptical, dark green leaves and small, round fruits that turn purplish-black when ripe. These fruits encase a tart, juicy pulp surrounding a large seed, often enjoyed for their unique flavor and potential health benefits.",
    "The Avocado tree boasts glossy, dark green leaves and inconspicuous flowers. Its pear-shaped, creamy fruits are rich and buttery, with a mild, nutty taste that makes them a versatile ingredient in various dishes.",
    "The Sinegwelas tree displays pinnate leaves and clusters of reddish fruits. These fruits, known for their blend of sweet and tangy flavors, are often enjoyed fresh or used in jams and preserves.",
    "The Chico tree features leathery, elliptical leaves and small, round fruits. These fruits house sweet, grainy flesh that has been likened to a mixture of brown sugar and pear, offering a delectable tropical treat.",
    "The Guava tree showcases oval leaves and white, fragrant flowers. Its round or pear-shaped fruits come in various colors and boast a sweet-tart flavor that can be enjoyed fresh or used to create jams and jellies.",
    "The Lanzones tree bears glossy leaves and small, round fruits clustered in bunches. These fruits feature translucent, segmented flesh with a unique balance of sweetness and acidity, making them a popular tropical delicacy.",
    "The Yellow Bell plant is recognized for its bright yellow, trumpet-shaped flowers. These cheerful blooms add vibrant color to landscapes and are frequented by pollinators seeking nectar.",
    "The Milendres White plant features clusters of fragrant, white flowers with star-like petals. These blossoms create an enchanting display against the plant's glossy green foliage.",
    "The Kabalyero plant is renowned for its vibrant, colorful bracts that surround its inconspicuous flowers. These bracts create a stunning visual effect, adorning gardens and landscapes with splashes of red, pink, purple, or orange.",
    "The Bridal Bouquet plant showcases spiraling clusters of white bracts resembling a bridal bouquet, while its true flowers are hidden within the bracts. This unique structure adds an elegant touch to gardens and floral arrangements.",
    "The Sampaguita plant produces small, white, star-shaped flowers known for their intoxicating fragrance. These blooms hold cultural significance as the national flower of the Philippines and are often used in making traditional leis and perfumes.",
    "The Manga Kalabaw tree bears large, oblong leaves and yields sizeable, juicy fruits with a distinct aroma. These mangoes are celebrated for their sweet, succulent flesh, making them a beloved tropical treat.",
    "The Manga Pico tree showcases glossy leaves and small, round fruits with a proportionally large pit. Despite their diminutive size, these mangoes offer a burst of sweet and tangy flavor, embodying the essence of tropical indulgence."

];
var textIndex = 1;
const htmlBtnnext = document.getElementById("next");
const htmlBtnlast = document.getElementById("last");

function nextImage() {
    description.textContent = text[textIndex];
    textIndex++;
    myImage.setAttribute("src", images[imageIndex]);
    imageIndex++;
    if (textIndex === 23) {
        htmlBtnnext.disabled = true;
        }
    else{
        if (textIndex > 0) {
        htmlBtnlast.disabled = false;
    }
    }
}

function previousImage() {
    description.textContent = text[textIndex];
    textIndex--;
    myImage.setAttribute("src", images[imageIndex]);
    imageIndex--;
    if (textIndex == 0) {
        htmlBtnlast.disabled = true;
    }
    else{
        if (textIndex < 23) {
        htmlBtnnext.disabled = false;
    }
    }
}



